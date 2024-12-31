import React from 'react'
import "../css/Contact.css"
import plug from "../assets/images/plug.png"
import Footer from '../components/Footer'
function Contact() {
    return (
        <>
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                        <img src={plug} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form action="">
                                <div>
                                    <input type="text" name="name" placeholder="Name" />
                                </div>

                                <div>
                                    <input type="email" name="email" placeholder="Email" />
                                </div>

                                <div>
                                    <input type="text" name="phone" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="text" className='message-box' placeholder='Message' />
                                </div>
                                <div className="d-flex">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div className="map-container">
                                <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55783626531!2d76.35068085!3d10.008816000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1735563077564!5m2!1sen!2sin" style={{ width: "100%", height: "100%" }}
                                        allowFullScreen>
                                    </iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Contact