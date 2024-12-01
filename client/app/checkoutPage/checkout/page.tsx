"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false); // To show confirmation alert
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleCheckout = () => {
    setShowConfirmation(true); // Show confirmation alert
  };

  const confirmOrder = () => {
    // Clear the cart and go back to the homepage
    localStorage.removeItem("cart");
    setShowConfirmation(false); // Close the confirmation modal
    router.push("/"); // Redirect to homepage
  };

  const cancelOrder = () => {
    setShowConfirmation(false); // Close the confirmation modal without taking action
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-8 py-10 border-b">
          <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>
          <p className="mt-2 text-lg text-gray-600">
            Review and finalize your order
          </p>
        </div>
        <div className="px-8 py-6">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-16 h-16 object-cover rounded-lg shadow-md"
                    />
                    <div>
                      <p className="text-xl font-semibold text-gray-900">
                        {item.productName}
                      </p>
                      <p className="text-gray-600">₹{item.productPrice}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    ₹{item.productPrice}
                  </p>
                </div>
              ))}
              <div className="flex justify-between items-center mt-8">
                <p className="text-xl font-semibold text-gray-900">Total:</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹
                  {cartItems.reduce(
                    (total, item) => total + item.productPrice,
                    0
                  )}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-xl text-gray-600">
              Your cart is empty!
            </p>
          )}
        </div>
        <div className="px-8 py-6 bg-gray-100 text-right">
          <button
            onClick={handleCheckout}
            className="px-8 py-3 bg-gray-900 text-white font-semibold text-lg rounded-full shadow-lg transform transition-all hover:bg-gray-800 hover:scale-105"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-bold text-gray-900">Confirm Order</h2>
            <p className="text-lg text-gray-600 mt-4">
              Are you sure you want to place your order? Once confirmed, your
              cart will be cleared.
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={cancelOrder}
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-md font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmOrder}
                className="px-6 py-2 bg-gray-900 text-white rounded-md font-semibold"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
