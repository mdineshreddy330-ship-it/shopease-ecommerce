import React, { useState } from "react";

import Navbar from "../components/Navbar";

function Orders() {
  const [search, setSearch] = useState("");

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="orders-page">
        <h1 className="section-title">
          Order History
        </h1>

        {orders.length === 0 ? (
          <div className="empty-cart">
            <h2>No Orders Found</h2>
          </div>
        ) : (
          orders.map((order, index) => (
            <div
              className="order-card"
              key={index}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <h2>
                  Order #{index + 1}
                </h2>

                <span
                  style={{
                    background:
                      "#dcfce7",
                    color: "#166534",
                    padding:
                      "8px 14px",
                    borderRadius:
                      "20px",
                    fontSize:
                      "14px",
                    fontWeight:
                      "600",
                  }}
                >
                  Delivered
                </span>
              </div>

              <p
                style={{
                  marginTop: "10px",
                  color: "gray",
                }}
              >
                Ordered On:{" "}
                {order.date}
              </p>

              <p
                style={{
                  marginTop: "10px",
                  color: "#2563eb",
                  fontWeight: "600",
                }}
              >
                Payment Method:{" "}
                {order.paymentMethod ||
                  "UPI"}
              </p>

              <div
                style={{
                  marginTop: "25px",
                }}
              >
                {order.items?.map((item) => (
                  <div
                    className="order-item"
                    key={item.id}
                    style={{
                      marginBottom:
                        "20px",
                      paddingBottom:
                        "20px",
                      borderBottom:
                        "1px solid #e5e7eb",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        alignItems:
                          "center",
                      }}
                    >
                      <img
                        src={
                          item.image
                        }
                        alt={
                          item.name
                        }
                        style={{
                          width:
                            "90px",
                          height:
                            "90px",
                          objectFit:
                            "cover",
                          borderRadius:
                            "12px",
                        }}
                      />

                      <div>
                        <h3>
                          {
                            item.name
                          }
                        </h3>

                        <p
                          style={{
                            color:
                              "gray",
                            marginTop:
                              "6px",
                          }}
                        >
                          Quantity:{" "}
                          {item.quantity ||
                            1}
                        </p>

                        <p
                          style={{
                            color:
                              "#2563eb",
                            fontWeight:
                              "600",
                            marginTop:
                              "6px",
                          }}
                        >
                          ₹
                          {item.price}
                        </p>
                      </div>
                    </div>

                    <h3>
                      ₹
                      {item.price *
                        (item.quantity ||
                          1)}
                    </h3>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "25px",
                  textAlign: "right",
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "#111827",
                }}
              >
                Total Paid: ₹
                {order.total}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Orders;