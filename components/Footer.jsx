import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-w">
        <div className="footer">
          <div className="footer__contact">
            <h2>Hekto</h2>
            <p>Contact Info</p>
            <ul>
              <li>
                <span>
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__categories">
            <p>Catagories</p>
            <ul>
              <li>
                <span>Laptops & Computers</span>
              </li>
              <li>
                <span>Cameras & Photography</span>
              </li>
              <li>
                <span>Smart Phones & Tablets</span>
              </li>
              <li>
                <span>Video Games & Consoles</span>
              </li>
            </ul>
          </div>
          <div className="footer__customer">
            <p>Customer Care</p>
            <ul>
              <li>
                <span>My Account</span>
              </li>
              <li>
                <span>Discount</span>
              </li>
              <li>
                <span>Returns</span>
              </li>
              <li>
                <span>Orders History</span>
              </li>
            </ul>
          </div>
          <div className="footer__pages">
            <p>Pages</p>
            <ul>
              <li>
                <span>Blog</span>
              </li>
              <li>
                <span>Browse the Shop</span>
              </li>
              <li>
                <span>Category</span>
              </li>
              <li>
                <span>Pre-Built Pages</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-w">
        <div className="copyright">
          <span className="copyright__text">©Webecy - All Rights Reserved</span>
          <div className="copyright__icons"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
