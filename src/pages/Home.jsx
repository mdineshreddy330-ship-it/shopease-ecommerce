import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Modern E-Commerce Store</h1>

          <p>
            Buy premium products with amazing offers and discounts
          </p>

          <button onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;