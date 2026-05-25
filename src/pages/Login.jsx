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

      navigate("/products");
    } else {
      alert(
        "Wrong Credentials! Please check your email and password."
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
            className="input-group"
          >
            <FaEnvelope
              className="input-icon"
            />

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              aria-label="Email"
              data-testid="email-input"
              className="login-input"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />
          </div>

          <div
            className="input-group"
          >
            <FaLock
              className="input-icon"
            />

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              aria-label="Password"
              data-testid="password-input"
              className="login-input"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />
          </div>

          <button
            id="login-btn"
            name="loginButton"
            type="submit"
            aria-label="Login Button"
            data-testid="login-button"
            className="login-btn"
          >
            Login
          </button>

          <div className="demo-credentials">
            <h4>
              Demo Credentials
            </h4>

            <p>
              Email:
              ecommerce@gmail.com
            </p>

            <p>
              Password:
              Test@321
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;