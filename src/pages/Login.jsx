import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert(
        "Please enter email and password"
      );

      return;
    }

    if (
      email ===
        "ecommerce@gmail.com" &&
      password === "Test@321"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
        })
      );

      alert("Login Successful");

      navigate("/products");
    } else {
      alert(
        "Wrong Credentials! Please check your email and password."
      );
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>

      <div className="login-container">
        <div className="login-box">
          <h1>ShopEase</h1>

          <p>
            Login to continue shopping
          </p>

          <div
            style={{
              position: "relative",
            }}
          >
            <FaEnvelope
              style={{
                position: "absolute",
                left: "15px",
                top: "18px",
                color: "gray",
              }}
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              style={{
                paddingLeft: "45px",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
            }}
          >
            <FaLock
              style={{
                position: "absolute",
                left: "15px",
                top: "18px",
                color: "gray",
              }}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              style={{
                paddingLeft: "45px",
              }}
            />
          </div>

          <button onClick={handleLogin}>
            Login
          </button>

          <div className="demo-credentials">
            <p>
              Demo Credentials
            </p>

            <p>
              Email:
              ecommerce@gmail.com
            </p>

            <p>
              Password:
              Test@321
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;