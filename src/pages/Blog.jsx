import React from 'react'
import plug from"../assets/images/plug.png"
import blog1 from"../assets/images/blog1.jpg"
import blog2 from"../assets/images/blog2.jpg"
import "../css/Blog.css"
function Blog() {
  return (
    <>
      <div className="blog_section layout_padding">
        <div className="container">
            <div className="heading_container">
            <h2>
                Blog
            </h2>
           
            <img src={plug} alt="" />
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="box">
                    <div className="img-box">
                        <img src={blog1} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Blog Title Goes Here</h5>
                        <p>There are many of passages of Electrochip</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="box">
                    <div className="img-box">
                        <img src={blog2} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Blog Title Goes Here</h5>
                        <p>There are many of passages of Electrochip</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Blog