import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { uploadImageToS3 } from "../config/uploadImageToS3";
const prisma = new PrismaClient();

export const AddProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryId = req.params.categoryId;
  const { name, price, description } = req.body;

  const file = req.file as Express.Multer.File | undefined;

  try {
    let imageUrl = "";

    if (file) {
      imageUrl = await uploadImageToS3(file);
    }
    const product = await prisma.product.create({
      data: {
        name,
        description,
        image: imageUrl, // Save the uploaded image URL
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
    console.error("Error adding product:", error);
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

export const getProductByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryName = req.params.name; // Extract the category name from the request parameters

  try {
    // Fetch the category by its name
    const category = await prisma.category.findUnique({
      where: { name: categoryName },
    });

    if (!category) {
      res.status(404).json({
        message: "Category not found.",
      });
      return;
    }

    // Fetch products associated with the category
    const products = await prisma.product.findMany({
      where: {
        categoryId: category.id,
      },
    });

    if (products.length === 0) {
      res.status(404).json({
        message: "No products found for this category.",
      });
      return;
    }

    res.status(200).json({
      message: "Products retrieved successfully",
      products,
    });
  } catch (error: any) {
    console.error("Error fetching products by category name:", error);
    res.status(500).json({
      message: "An error occurred while fetching products by category name.",
      error: error.message,
    });
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      res.status(404).json({ message: "No products found." });
      return;
    }

    res.status(200).json({
      message: "All products retrieved successfully",
      products,
    });
  } catch (error: any) {
    console.error("Error fetching all products:", error);
    res.status(500).json({
      message: "An error occurred while fetching all products",
      error: error.message,
    });
  }
};
