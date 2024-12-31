import React from 'react';
import location from '../assets/images/location-white.png';
import telephone from '../assets/images/telephone-white.png';
import envelope from '../assets/images/envelope-white.png';
import facebook from '../assets/images/fb.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import '../css/Footer.css';

function Footer() {
  return (
    <>
      <div className="info_section layout_padding">
        <div className="container">
          <div className="info_container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-item">
                  <img src={location} alt="Location" />
                  <a href=''>Passages of Lorem Ipsum available</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item">
                  <img src={telephone} alt="Telephone" />
                  <a href=''>Call:+1 123 456 7890</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item ">
                  <img src={envelope} alt="Email" />
                  <a href=''>electrochip@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form action="">
                  <input type="text" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="info_social">
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-9 mx-auto">
                    <p>
                        &copy: 2019 All Rights Reserved By
                        <a href=""> Electrochip</a>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;