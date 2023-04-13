import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation } from "swiper";
import Navbar from "../Navbar"

const EquipmentLister = ({setLoginUser}) => {
  return (
    <div style={{marginTop: "50px"}}>
      <Navbar setLoginUser={setLoginUser} />
      <section className="home" id="home">
        <div className="box second" style= {{backgroundImage: "url('images/home-bg-2.jpg')" }}>
            <div className="content">
                <span>never stop</span>
                <h3>exploring</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                <a href="#" className="btn" style={{fontWeight: "500"}}>Camp Details</a>
            </div>
        </div>
      </section>
    
      
      
      <section className="shop" id="shop">
      <h1 className="heading">featured products</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}

        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="slide">
          <div className="image">
                      <img src={require('../images/product-1.jpg')} />   
                      {/* <img src="images/product-1.jpg" alt=""> */}
                      <div className="icons">
                          <a href="#" className="fas fa-shopping-cart"></a>
                          <a href="#" className="fas fa-eye"></a>
                          <a href="#" className="fas fa-share"></a>
                      </div>
                  </div>
                  <div className="content">
                      <h3>survival kits</h3>
                      <div className="price"> $5.00 - $25.00 </div>
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                      </div>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          <div className="image">
                      <img src={require('../images/product-2.jpg')} />   
                      {/* <img src="images/product-2.jpg" alt=""> */}
                      <div className="icons">
                          <a href="#" className="fas fa-shopping-cart"></a>
                          <a href="#" className="fas fa-eye"></a>
                          <a href="#" className="fas fa-share"></a>
                      </div>
                  </div>
                  <div className="content">
                      <h3>survival kits</h3>
                      <div className="price"> $5.00 - $25.00 </div>
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                      </div>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          <div className="image">
                      <img src={require('../images/product-3.JPG')} />   
                      {/* <img src="images/product-3.jpg" alt=""> */}
                      <div className="icons">
                          <a href="#" className="fas fa-shopping-cart"></a>
                          <a href="#" className="fas fa-eye"></a>
                          <a href="#" className="fas fa-share"></a>
                      </div>
                  </div>
                  <div className="content">
                      <h3>survival kits</h3>
                      <div className="price"> $5.00 - $25.00 </div>
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                      </div>
                  </div>
                </div>
              </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          <div className="image">
                      <img src={require('../images/product-4.JPG')} />   
                      {/* <img src="images/product-4.jpg" alt=""> */}
                      <div className="icons">
                          <a href="#" className="fas fa-shopping-cart"></a>
                          <a href="#" className="fas fa-eye"></a>
                          <a href="#" className="fas fa-share"></a>
                      </div>
                  </div>
                  <div className="content">
                      <h3>survival kits</h3>
                      <div className="price"> $5.00 - $25.00 </div>
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                      </div>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          <div className="image">
                      <img src={require('../images/product-5.jpg')} />   
                      {/* <img src="images/product-5.jpg" alt=""> */}
                      <div className="icons">
                          <a href="#" className="fas fa-shopping-cart"></a>
                          <a href="#" className="fas fa-eye"></a>
                          <a href="#" className="fas fa-share"></a>
                      </div>
                  </div>
                  <div className="content">
                      <h3>survival kits</h3>
                      <div className="price"> $5.00 - $25.00 </div>
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                      </div>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          <div className="image">
                      <img src={require('../images/product-6.jpg')} />   
                      {/* <img src="images/product-6.jpg" alt=""> */}
                      <div className="icons">
                          <a href="#" className="fas fa-shopping-cart"></a>
                          <a href="#" className="fas fa-eye"></a>
                          <a href="#" className="fas fa-share"></a>
                      </div>
                  </div>
                  <div className="content">
                      <h3>survival kits</h3>
                      <div className="price"> $5.00 - $25.00 </div>
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                      </div>
                  </div>
                </div>
        </SwiperSlide>
      </Swiper>


      </section>
    </div>
  )
}

export default EquipmentLister