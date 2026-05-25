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

  // Clear old sessions first

  localStorage.removeItem("user");

  sessionStorage.clear();

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
    const userData = {
      email:
        enteredEmail,
      loggedIn: true,
      loginTime:
        new Date().getTime(),
    };

    // Save fresh login session

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    sessionStorage.setItem(
      "isAuthenticated",
      "true"
    );

    navigate("/products");
    window.location.reload();
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
          noValidate
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
            <label
              htmlFor="email"
              style={{
                display: "none",
              }}
            >
              Email
            </label>

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
              placeholder="Enter Email"
              aria-label="Email"
              data-testid="email-input"
              autoComplete="email"
              className="login-input"
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
            <label
              htmlFor="password"
              style={{
                display: "none",
              }}
            >
              Password
            </label>

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
              placeholder="Enter Password"
              aria-label="Password"
              data-testid="password-input"
              autoComplete="current-password"
              className="login-input"
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
            name="loginButton"
            type="submit"
            aria-label="Login"
            data-testid="login-button"
            className="login-btn"
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
        </form>
      </div>
    </div>
  );
}

export default Login;