import React from 'react';
import '../contact.css';
import Navbar from "../Navbar"

const ContactUs = ({setLoginUser}) =>   {
  return (
    <div>
    
      <Navbar setLoginUser={setLoginUser} />
      <section className="home" id="home">
        <div className="box" style= {{backgroundImage: "url('images/home-bg-3.jpg')"}}>
            <div className="content">
                <h3>Contact Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                <a href="#contact-form" className="btn">Contact Us</a>
            </div>
        </div>
      <div className = "contact-body">
        <div className = "contact-info">
          <div>
            <span><i className = "fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span className = "text">1-2392-23928-2</span>
          </div>
          <div>
            <span><i className = "fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span className = "text">trekbuddy@gmail.com</span>
          </div>
          <div>
            <span><i className = "fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span className = "text">C-II Block C 2 Phase 1 Johar Town, Lahore, Punjab</span>
          </div>
          <div>
            <span><i className = "fas fa-clock"></i></span>
            <span>Opening Hours</span>
            <span className = "text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className = "contact-form" id="contact-form">
          <form>
            <div>
              <input type = "text" className = "form-control" placeholder="First Name"></input>
              <input type = "text" className = "form-control" placeholder="Last Name"></input>
            </div>
            <div>
              <input type = "email" className = "form-control" placeholder="E-mail"></input>
              <input type = "text" className = "form-control" placeholder="Phone"></input>
            </div>
            <textarea rows = "5" placeholder="Message" className = "form-control"></textarea>
            <input type = "submit" className = "send-btn" value = "send message"></input>
          </form>

          <div>
              <img src={require('../images/contact-png.png')} />
          </div>
        </div>
      </div>

      <div className = "map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.634426236914!2d74.29148141448103!3d31.45172975767657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190143e0e99feb%3A0xf39379efff4dd86!2sUniversity%20of%20Management%20%26%20Technology%20(UMT)!5e0!3m2!1sen!2s!4v1662428882308!5m2!1sen!2s" style={{width: "100%", height: "450px", frameBorder: "0px", ariaHidden: "false",border: "0px", tabindex: "0"}}></iframe>
      </div>
    </section>

    
    </div>
  )
}
export default ContactUs