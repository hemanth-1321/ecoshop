import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const jwtSecret = process.env.JWT_SECRET;
console.log("jwt", jwtSecret);

if (!jwtSecret) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

export const Register = async (req: Request, res: Response): Promise<void> => {
  const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  try {
    const { name, email, password } = userSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.error("Error: Attempt to register an already existing user.");
      res.status(400).json({
        message: "User Already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: "Validation error",
        errors: error.errors,
      });
    } else {
      console.error("Error during user creation:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
};

export const Login = async (req: Request, res: Response): Promise<void> => {
  const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "password must be atleast 6 characters"),
  });

  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.error("Error: User not found.");
      res.status(401).json({
        message: "Invalid credentials",
      });
      return;
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      console.error("Error:Incorrect password");
      res.status(401).json({
        message: "Invalid credentials",
      });
      return;
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: "Validation error",
        errors: error.errors,
      });
    } else {
      console.error("Error during login:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
};
