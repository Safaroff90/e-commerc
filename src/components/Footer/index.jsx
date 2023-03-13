import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ad, aut? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
              eveniet?
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ad, aut? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
              eveniet?
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">Logo</span>
            <span className="copyright">
            © Copyright 2035 . Powered and secured by Safaroff
            </span>
          </div>
          <div className="right">
            <img src="/img/payment.png"  alt="payment"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
