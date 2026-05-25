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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert(
        "Please enter email and password"
      );

      return;
    }

    if (
      email.trim() ===
        "ecommerce@gmail.com" &&
      password.trim() ===
        "Test@321"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
        })
      );

      navigate("/products");
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
        <form
          className="login-box"
          onSubmit={handleLogin}
          data-testid="login-form"
        >
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
              className="email-icon"
              style={{
                position: "absolute",
                left: "15px",
                top: "18px",
                color: "gray",
                zIndex: "10",
              }}
            />

            <input
              id="email"
              name="email"
              type="email"
              aria-label="Email Address"
              data-testid="email-input"
              className="email-input"
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
              marginTop: "20px",
            }}
          >
            <FaLock
              className="password-icon"
              style={{
                position: "absolute",
                left: "15px",
                top: "18px",
                color: "gray",
                zIndex: "10",
              }}
            />

            <input
              id="password"
              name="password"
              type="password"
              aria-label="Password"
              data-testid="password-input"
              className="password-input"
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

          <button
            id="login-btn"
            name="loginButton"
            type="submit"
            aria-label="Login"
            data-testid="login-button"
            className="login-btn"
          >
            Login
       </button>

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
        </form>
      </div>
    </div>
  );
}

export default Login;