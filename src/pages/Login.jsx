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
    const enteredEmail =
      email.trim();

    const enteredPassword =
      password.trim();

    if (
      enteredEmail ===
        "ecommerce@gmail.com" &&
      enteredPassword ===
        "Test@321"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email:
            enteredEmail,
        })
      );

      window.location.href =
        "/products";
    } else {
      alert(
        "Invalid Email or Password"
      );
    }
  };

  return (
    <div
      className="login-page"
      data-testid="login-page"
    >
      <div className="overlay"></div>

      <div className="login-container">
        <div
          className="login-box"
          data-testid="login-form"
        >
          <h1>ShopEase</h1>

          <p>
            Login to continue shopping
          </p>

          {/* EMAIL */}

          <div
            style={{
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <FaEnvelope
              style={{
                position: "absolute",
                left: "15px",
                top: "18px",
                color: "gray",
                zIndex: 10,
              }}
            />

            <input
              id="email"
              name="email"
              type="email"
              aria-label="Email"
              data-testid="email-input"
              className="login-input"
              placeholder="Enter Email"
              autoComplete="off"
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

          {/* PASSWORD */}

          <div
            style={{
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <FaLock
              style={{
                position: "absolute",
                left: "15px",
                top: "18px",
                color: "gray",
                zIndex: 10,
              }}
            />

            <input
              id="password"
              name="password"
              type="password"
              aria-label="Password"
              data-testid="password-input"
              className="login-input"
              placeholder="Enter Password"
              autoComplete="off"
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

          {/* LOGIN BUTTON */}

          <button
            id="login-btn"
            data-testid="login-button"
            aria-label="Login"
            className="login-btn"
            onClick={handleLogin}
            type="button"
          >
            Login
          </button>

          {/* DEMO */}

          <div
            className="demo-credentials"
            style={{
              marginTop: "25px",
              textAlign: "center",
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            <h3>
              Demo Credentials
            </h3>

            <strong>
              ecommerce@gmail.com
            </strong>

            <br />

            <strong>
              Test@321
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;