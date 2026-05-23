import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaCreditCard,
  FaMobileAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

function Checkout() {
  const navigate = useNavigate();

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const [coupon, setCoupon] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("UPI");

  const [upiId, setUpiId] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardName, setCardName] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * (item.quantity || 1),
    0
  );

  const delivery = 99;

  let discount = 0;

  if (coupon === "SAVE10") {
    discount = subtotal * 0.1;
  }

  const total =
    subtotal + delivery - discount;

  const placeOrder = () => {
    if (
      paymentMethod === "UPI" &&
      !upiId
    ) {
      alert("Please Enter UPI ID");

      return;
    }

    if (
      (paymentMethod ===
        "Credit Card" ||
        paymentMethod ===
          "Debit Card") &&
      (!cardNumber ||
        !cardName ||
        !expiry ||
        !cvv)
    ) {
      alert(
        "Please Fill Card Details"
      );

      return;
    }

    const existingOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    const newOrder = {
      items: cart,
      total,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    existingOrders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(existingOrders)
    );

    localStorage.removeItem("cart");

    navigate("/success");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Secure Checkout</h1>

        {cart.map((item) => (
          <div
            className="summary-item"
            key={item.id}
          >
            <span>
              {item.name} x{" "}
              {item.quantity || 1}
            </span>

            <span>
              ₹
              {item.price *
                (item.quantity || 1)}
            </span>
          </div>
        ))}

        <div className="summary-row">
          <span>Delivery</span>

          <span>₹99</span>
        </div>

        <div className="summary-row">
          <span>Discount</span>

          <span>
            -₹{discount.toFixed(0)}
          </span>
        </div>

        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={(e) =>
            setCoupon(e.target.value)
          }
          className="payment-input"
        />

        <div className="payment-methods">
          <button
            className={
              paymentMethod === "UPI"
                ? "active-payment"
                : ""
            }
            onClick={() =>
              setPaymentMethod("UPI")
            }
          >
            <FaMobileAlt />

            UPI
          </button>

          <button
            className={
              paymentMethod ===
              "Credit Card"
                ? "active-payment"
                : ""
            }
            onClick={() =>
              setPaymentMethod(
                "Credit Card"
              )
            }
          >
            <FaCreditCard />

            Credit Card
          </button>

          <button
            className={
              paymentMethod ===
              "Debit Card"
                ? "active-payment"
                : ""
            }
            onClick={() =>
              setPaymentMethod(
                "Debit Card"
              )
            }
          >
            <FaCreditCard />

            Debit Card
          </button>

          <button
            className={
              paymentMethod ===
              "Cash On Delivery"
                ? "active-payment"
                : ""
            }
            onClick={() =>
              setPaymentMethod(
                "Cash On Delivery"
              )
            }
          >
            <FaMoneyBillWave />

            COD
          </button>
        </div>

        {paymentMethod === "UPI" && (
          <div className="payment-form">
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) =>
                setUpiId(
                  e.target.value
                )
              }
              className="payment-input"
            />
          </div>
        )}

        {(paymentMethod ===
          "Credit Card" ||
          paymentMethod ===
            "Debit Card") && (
          <div className="payment-form">
            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) =>
                setCardName(
                  e.target.value
                )
              }
              className="payment-input"
            />

            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                )
              }
              className="payment-input"
            />

            <div className="card-row">
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) =>
                  setExpiry(
                    e.target.value
                  )
                }
                className="payment-input"
              />

              <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) =>
                  setCvv(
                    e.target.value
                  )
                }
                className="payment-input"
              />
            </div>
          </div>
        )}

        {paymentMethod ===
          "Cash On Delivery" && (
          <div className="cod-box">
            Cash will be collected
            during delivery.
          </div>
        )}

        <h2 className="final-total">
          Total: ₹
          {total.toFixed(0)}
        </h2>

        <button
          className="place-order-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;