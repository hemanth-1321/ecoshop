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

export const EditProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId = req.params.productId;
  const { name, image, price, description } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        name,
        image,
        price,
        description,
      },
    });
    res.status(201).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error: any) {
    console.error("error updaing product", error);
    res.status(500).json({
      message: "An error occured while updating product",
      error: error.message,
    });
  }
};

export const DeleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId = req.params.productId;

  try {
    const deleteProduct = await prisma.product.delete({
      where: { id: productId },
    });
    res.status(201).json({
      message: "Product deleted successfull",
    });
  } catch (error: any) {
    console.error("Error deleteing product", error);
    res.status(500).json({
      message: "An error occured while deleting product",
      error: error.message,
    });
  }
};
