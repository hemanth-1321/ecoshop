import { PrismaClient, Category } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"], // Enable query logging
});

export const Categories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("Fetching categories...");
    const categories: Category[] = await prisma.category.findMany();
    console.log("Categories fetched:", categories);
    res.status(200).json(categories);
  } catch (error: unknown) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      message: "An unexpected server error occurred",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
