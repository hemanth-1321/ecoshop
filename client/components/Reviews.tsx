import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

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

interface ReviewsProps {
  productId: string;
}

const Reviews = ({ productId }: ReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosInstance.get(`/review/all/${productId}`);
        const fetchedReviews: Review[] = response.data.reviews;
        setReviews(fetchedReviews);
        setLoading(false);
      } catch (error) {
        setError("Failed to load reviews.");
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  if (loading) {
    return <div className="text-center py-12 text-xl">Loading reviews...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-xl text-red-600">{error}</div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            key={review.id}
            className={`mt-4 p-4 border rounded-md ${
              review.sentimentLabel === "Positive"
                ? "bg-green-100 border-green-500"
                : review.sentimentLabel === "Negative"
                ? "bg-red-100 border-red-500"
                : "bg-yellow-100 border-yellow-500"
            }`}
          >
            <p className="font-semibold">{review.user.name}</p>
            <p className="font-semibold text-gray-900">{review.title}</p>
            <p className="text-sm text-gray-600">{review.content}</p>
            <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
            <p className="text-sm text-gray-400">
              Sentiment: {review.sentimentLabel}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
