import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const adminEmail = process.env.ADMIN_EMAIL as string;
const adminPassword = process.env.ADMIN_PASSWORD as string;
const jwtSecret = process.env.JWT_SECRET as string;
if (!jwtSecret) {
  throw new Error("Environment variable JWT_SECRET must be defined.");
}

interface AdminJwtPayload extends JwtPayload {
  role: string;
}

export const adminLogin = (req: Request, res: Response): void => {
  const { email, password } = req.body;
  const role = "admin"; // Ensure this is part of the payload

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  if (email === adminEmail && password === adminPassword) {
    // Include role in the token payload
    const token = jwt.sign({ role, email }, jwtSecret, {
      expiresIn: "365d",
    });

    res.status(201).json({ message: "Login successful", token });
    return;
  }

  res.status(401).json({ message: "Invalid credentials" });
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret) as AdminJwtPayload;
    console.log("Decoded Token:", decoded);

    if (decoded.role === "admin") {
      next();
      return;
    }

    res.status(403).json({ message: "Forbidden" });
  } catch (error: any) {
    console.error("JWT Verification Error:", error.message);
    res.status(403).json({ message: "Forbidden", error: error.message });
  }
};
