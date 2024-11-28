import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { analyzeSentiment } from "../config/productSentimentAnalyze"; // Assuming the sentiment analysis function is in this path
const prisma = new PrismaClient();

export const ProductReview = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { content, rating, title, image, userId, productId } = req.body;
  console.log(content, rating, title, image, userId, productId);

  if (!content || !userId || !productId) {
    res.status(400).json({
      error: "Content, userId, and productId are required.",
    });
    return;
  }

  if (rating < 1 || rating > 5) {
    res.status(400).json({
      error: "Rating must be between 1 and 5.",
    });
    return;
  }

  try {
    // Analyze sentiment
    const sentiment = analyzeSentiment(content);

    // Create the review in the database
    const review = await prisma.review.create({
      data: {
        content,
        rating,
        title,
        image,
        userId,
        productId,
        ...sentiment,
      },
    });

    // Respond with success
    res.status(201).json({
      message: "Review created successfully.",
      review,
    });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({
      error: "Something went wrong while creating the review.",
    });
  }
};

export const getProductReviews = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId = req.params.productId;

  if (!productId) {
    res.status(400).json({
      error: "Product ID is required.",
    });
    return;
  }

  try {
    const reviews = await prisma.review.findMany({
      where: { productId },
      include: {
        user: {
          select: {
            id: true,
            name: true, // Include user's name if required
          },
        },
      },
    });

    if (reviews.length === 0) {
      res.status(404).json({
        message: "No reviews found for this product.",
      });
      return;
    }

    res.status(200).json({
      message: "Reviews retrieved successfully.",
      reviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      error: "Something went wrong while fetching the reviews.",
    });
  }
};
