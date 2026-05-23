import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function Cart() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * (item.quantity || 1),
    0
  );

  const delivery = subtotal > 0 ? 99 : 0;

  const total = subtotal + delivery;

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="cart-page">
        <div className="cart-left">
          <h1 className="section-title">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <h2>Your Cart is Empty</h2>

              <button
                onClick={() =>
                  navigate("/products")
                }
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                className="advanced-cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>
                    ₹{item.price}
                  </p>

                  <div className="qty-controls">
                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>

            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>

            <span>₹{delivery}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>

            <span>₹{total}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              navigate("/checkout")
            }
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;