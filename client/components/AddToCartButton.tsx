// src/components/AddToCartButton.tsx
import { useState } from "react";

type AddToCartButtonProps = {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
};

const AddToCartButton = ({
  productId,
  productName,
  productPrice,
  productImage,
}: AddToCartButtonProps) => {
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    const cartItem = {
      productId,
      productName,
      productPrice,
      productImage,
    };

    // Save the item in localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    setLoading(true);

    // Redirect to checkout page (simple window.location for external use)
    setTimeout(() => {
      window.location.href = "/checkoutPage/checkout"; // Redirect using window.location
    }, 500); // small delay to handle the state change
  };

  return (
    <button
      onClick={addToCart}
      className="mt-6 px-6 py-3 bg-gray-900 text-white font-semibold text-lg rounded-md"
      disabled={loading}
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
