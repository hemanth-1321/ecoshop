import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AddProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryId = req.params.categoryId;

  const { name, image, price, description } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        image,
        price,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error: any) {
    console.error("error adding product");
    res.status(500).json({
      message: "An error occurred while adding the product",
      error: error.message,
    });
  }
};
