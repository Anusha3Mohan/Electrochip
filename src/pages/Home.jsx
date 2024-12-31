import React from "react";
import "../css/Home.css";
import image from '../assets/images/slider-img.jpg';
import back from '../assets/images/prev.png';
import next from '../assets/images/next.png';
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";

function Home() {
  return (
    <div>
      <section className="slider_section">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-md-6">
              <div className="detail_box">
                <h1 className="main-heading ">
                  ELECTRICAL<br />
                  SERVICE <br />
                  PROVIDERS
                </h1>
                <p className="description mt-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem.
                </p>
                <button className="rounded-pill mt-4 contact-button">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image Slider within Circle */}
            <div className="col-md-6">
              <div className="circle-slider">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                      <img
                        src={image}
                        className="d-block carousel-image"
                        alt="Slide 1"
                      />
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item">
                      <img
                        src={image}
                        className="d-block carousel-image"
                        alt="Slide 2"
                      />
                    </div>
                    {/* Slide 3 */}
                    <div className="carousel-item">
                      <img
                        src={image}
                        className="d-block carousel-image"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  </div>
                  </div>

                  {/* Carousel Controls outside the image */}
                  <div className="carousel-buttons">
                    <button
                      className="btn btn-secondary btn-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <img src={back} alt="Previous" />
                    </button>
                    <button
                      className="btn btn-secondary btn-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <img src={next} alt="Next" />
                    </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service/>
      <About/>
      <Blog/>
      <Contact/>
    </div>
    
  );
}

export default Home;
