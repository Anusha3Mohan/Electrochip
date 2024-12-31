import React from 'react'
import plug from"../assets/images/plug.png"
import s1 from"../assets/images/s1.png"
import s2 from"../assets/images/s2.png"
import s3 from"../assets/images/s3.png"
import s4 from"../assets/images/s4.png"
import s5 from"../assets/images/s5.png"
import "../css/Service.css"
function Service() {
  return (
    <>
      <div className="service_section layout_padding">
        <div className="container">
            <div className="heading_container">
                <h2>
                    Our Services
                </h2>
                <img src={plug} alt="" />
            </div>
            <div className="service_container">

                <div className="box">
                    <div className="img-box">
                        <img src={s1} className='img1' alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Equipment installation</h5>
                        <p>There are many variation of passages of Electrochip</p>
                    </div>
                </div>

                <div className="box active">
                    <div className="img-box">
                        <img src={s2} className='img1' alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Windmill Energy</h5>
                        <p>There are many variation of passages of Electrochip</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src={s3} className='img1' alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Electrical Maintenance</h5>
                        <p>There are many variation of passages of Electrochip</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src={s4} className='img1' alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>offShore Engineering</h5>
                        <p>There are many variation of passages of Electrochip</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src={s5} className='img1' alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Electrical Wiring</h5>
                        <p>There are many variation of passages of Electrochip</p>
                    </div>
                </div>

            </div>

            <div className="btn-box">
                <a href="">Read More</a>
            </div>
        </div>
      </div>

     
    </>
  )
}

export default Service