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
// Admin login handler
export const adminLogin = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  // Validate request body
  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  // Check credentials
  if (email === adminEmail && password === adminPassword) {
    // Generate JWT token with a 1-year expiration
    const token = jwt.sign({ role: "admin" }, jwtSecret, {
      expiresIn: "365d",
    });

    res.status(201).json({ message: "Login successful", token });
    return; // Exit function after sending response
  }

  // Invalid credentials
  res.status(401).json({ message: "Invalid credentials" });
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split("/")[1];
  if (!token) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as AdminJwtPayload;
    if (decoded.role == "admin") {
      next();
      return;
    }
  } catch (error) {
    res.status(403).json({ message: "Forbidden" });
    return;
  }
  res.status(403).json({ message: "Forbidden" });
};
