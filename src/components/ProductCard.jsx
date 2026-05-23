import React from "react";

import {
  FaHeart,
  FaStar,
} from "react-icons/fa";

function ProductCard({
  product,
  addToCart,
  addToWishlist,
}) {
  return (
    <div className="product-card">
      <div className="discount-badge">
        {product.discount}
      </div>

      <button
        className="wishlist-btn"
        onClick={() =>
          addToWishlist(product)
        }
      >
        <FaHeart />
      </button>

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <div className="rating">
          <FaStar />

          <span>{product.rating}</span>
        </div>

        <div className="price">
          ₹{product.price}
        </div>

        <button
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;