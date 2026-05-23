import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>ShopEase</h3>

          <p>
            Premium E-Commerce Experience
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <a href="#">Products</a>

          <a href="#">Orders</a>

          <a href="#">Wishlist</a>
        </div>

        <div>
          <h3>Support</h3>

          <p>Email: support@shopease.com</p>

          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;