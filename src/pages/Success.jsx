import React from "react";

import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>Order Successful 🎉</h1>

        <p>
          Thank you for shopping with us.
        </p>

        <button
          onClick={() =>
            navigate("/products")
          }
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Success;