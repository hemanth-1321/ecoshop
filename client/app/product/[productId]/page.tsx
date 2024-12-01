// src/pages/product/[productId].tsx
"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useParams } from "next/navigation";
import Reviews from "@/components/Reviews";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const AddToCartButton = dynamic(() => import("@/components/AddToCartButton"), {
  ssr: false,
});

type Review = {
  id: string;
  rating: number;
  content: string;
  title: string;
  positiveScore: number;
  negativeScore: number;
  neutralScore: number;
  compoundScore: number;
  sentimentLabel: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  productId: string;
  user: {
    id: string;
    name: string;
  };
};

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  category: {
    id: string;
    name: string;
    image: string;
    type: string;
  };
  reviews: Review[];
}

const ProductPage = () => {
  const { productId } = useParams();
  const [userId, setUserId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reviewContent, setReviewContent] = useState<string>("");
  const [reviewRating, setReviewRating] = useState<number>(5);
  const [reviewTitle, setReviewTitle] = useState<string>("");
  const [reviewImage, setReviewImage] = useState<string>("");
  const [reviewLoading, setReviewLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);

    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/products/${productId}`);
        const productData = response.data.product;
        setProduct(productData);
        setLoading(false);
      } catch (error: any) {
        setError("Failed to load product.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleSubmitReview = async () => {
    if (!userId) {
      alert("You must be logged in to submit a review.");
      return;
    }

    try {
      setReviewLoading(true);
      await axiosInstance.post("/review/add", {
        content: reviewContent,
        rating: reviewRating,
        title: reviewTitle,
        image: reviewImage,
        userId,
        productId,
      });
      alert("Review submitted successfully!");
      setReviewLoading(false);
      // Reset review form
      setReviewContent("");
      setReviewRating(5);
      setReviewTitle("");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review.");
      setReviewLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-xl">Loading product...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-xl text-red-600">{error}</div>
    );
  }

  // Ensure productId is a string before passing it to Reviews component
  const productIdString = Array.isArray(productId) ? productId[0] : productId;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
          <p className="text-lg text-gray-600 mt-4">{product?.description}</p>
          <p className="text-2xl font-bold text-gray-900 mt-6">
            ₹{product?.price}
          </p>

          {/* Ensure productId is a string */}
          {productIdString && <Reviews productId={productIdString} />}

          {/* Add to Cart Button */}
          {product && (
            <AddToCartButton
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productImage={product.image}
            />
          )}

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Write a Review</h3>
            <input
              type="text"
              className="w-full p-4 mt-4 border rounded-md"
              placeholder="Review Title"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
            />
            <textarea
              className="w-full p-4 mt-4 border rounded-md"
              rows={4}
              placeholder="Leave your review..."
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
            />

            <div className="mt-4">
              <label className="font-semibold">Rating: </label>
              <select
                value={reviewRating}
                onChange={(e) => setReviewRating(Number(e.target.value))}
                className="p-2 border rounded-md"
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} Star{rating > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleSubmitReview}
              className="mt-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-md"
              disabled={reviewLoading}
            >
              {reviewLoading ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
