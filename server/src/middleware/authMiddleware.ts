import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any;
}

const jwtSecret = process.env.JWT_SECRET;

export const AuthMiddleWare = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1]; // Assuming token is in Bearer format

    if (!token) {
      res.status(401).json({ message: "Unauthorized: Token missing" });
      return;
    }

    if (!jwtSecret) {
      console.error("JWT_SECRET is not set");
      res.status(500).json({ message: "Server configuration error" });
      return;
    }

    const decoded = jwt.verify(token, jwtSecret) as JwtPayload; // Now jwtSecret is guaranteed to be a string
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
