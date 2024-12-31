import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import "../css/Header.css"

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="hero_area">
      <div className="container">
        <div className="navbar navbar-expand-lg custom_nav-container">
          <div className="logo-container logo">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Electrochip Logo" />
              <span>Electrochip</span>
            </a>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="s-1"></span>
            <span className="s-2"></span>
            <span className="s-3"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="menu-container ml-auto">
              <ul className="navbar-nav home">
                <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className={`nav-item ${isActive('/service') ? 'active' : ''}`}>
                  <a className="nav-link" href="/service">Service</a>
                </li>
                <li className={`nav-item ${isActive('/blog') ? 'active' : ''}`}>
                  <a className="nav-link" href="/blog">Blog</a>
                </li>
                <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;