import React from 'react'
import "../css/About.css"
import plug from"../assets/images/plug.png"
import about1 from"../assets/images/about-img1.jpg"
import about2 from"../assets/images/about-img2.jpg"

function About() {
  return (
    <>
     <div className="about_section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="detail-box">
                        <div className="heading_container">
                            <h2>About Us</h2>
                            <img src={plug}alt="" />

                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam nam dicta a illo adipisci iste, fugit tempore mollitia fuga ex nihil incidunt excepturi veniam voluptas similique quod eius nesciunt. Rerum corporis quos impedit rem dignissimos quam, eum ipsum quibusdam enim laboriosam odit dolorum qui culpa magni totam soluta voluptate doloribus perspiciatis.
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img_container">
                        <div className="img-box b1">
                            <img src={about1} alt="" />
                        </div>
                        <div className="img-box b2">
                            <img src={about2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

      
    </>
  )
}

export default About