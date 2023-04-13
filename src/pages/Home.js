import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import '../style.css';
import { useState } from 'react';
import Navbar from "../Navbar"
import { useNavigate } from "react-router-dom";


const Home = ({setLoginUser}) => {
    const navigate = useNavigate()

  return (
      <div>
      
      <Navbar setLoginUser={setLoginUser} />
      <div className="search-form">

      <div id="close-search" className="fas fa-times"></div>

      <form action="">
          <label htmlFor="search-box" className="fas fa-search"></label>
      </form>
      </div>

      <section className="home" id="home">

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="box" style= {{backgroundImage: "url('images/home-bg-1.jpg')" }}>
                      <div className="content">
                          <span>The new way to plan  </span>
                          <h3>Your Next Trip</h3>
                          <p>You'll never travel without our trip planner again</p>
                      </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box second" style= {{backgroundImage: "url('images/home-bg-2.jpg')" }}>
                      <div className="content">
                          <span>make tour</span>
                          <h3>amazing</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                          <a href="#" className="btn">get started</a>
                      </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box" style= {{backgroundImage: "url('images/home-bg-3.jpg')" }}>
                      <div className="content">
                          <span>explore the</span>
                          <h3>new world</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                          <a href="#" className="btn">get started</a>
                      </div>
                  </div>
        </SwiperSlide>
      </Swiper>


      </section>

      {/* <!-- home section ends --> */}

      {/* <!-- category section starts  --> */}

      <section className="category">

      <h1 className="heading">adventure idea!</h1>

      <div className="box-container">

          <div className="box">
              <img src={require('../images/category-1.jpg')} />
              {/* <img src="./images/category-1.jpg" alt=""> */}
              <h3>bungee jump</h3>
              <p>Bungee jumping, also spelled bungy jumping, is an activity that involves a person jumping from a great height while connected to a large elastic cord.</p>
          </div>

          <div className="box">
              <img src={require('../images/category-2.jpg')} />
              {/* <img src="images/category-2.jpg" alt=""> */}
              <h3>zip lines</h3>
              <p>Zip lining as a recreational activity is fairly new; it is around since the late 20th century. Today, zip lining is a growing outdoor activity with millions of participants around the world.</p>
          </div>

          <div className="box">
              <img src={require('../images/category-3.jpg')} />
              {/* <img src="images/category-3.jpg" alt=""> */}
              <h3>Canoeing</h3>
              <p>Canoeing is an activity which involves paddling a canoe with a single-bladed paddle.</p>
          </div>

          <div className="box">
              <img src={require('../images/category-4.jpg')} />
              {/* <img src="images/category-4.jpg" alt=""> */}
              <h3>kayaking</h3>
              <p>A kayak is a small, narrow watercraft which is typically propelled by means of a double-bladed paddle.</p>
          </div>

      </div>

      </section>

      {/* <!-- category section ends -->

      <!-- about section starts  --> */}

      <section className="about" id="about">

      <div className="image">
              <img src={require('../images/Ratti-Gali.jpg')} />
          {/* <img src="images/about-img.jpg" alt=""> */}
      </div>

      <div className="content">
          <h3>memorable outdoor experiences(Ratti Gali)</h3>
          <p>The Ratti Gali Lake Is Alpine Glacial Lake In Neelum Valley Azad Kashmir, Pakistan At A Height Of 3700m ( 12130 Feet). It Is Surrounded By Glaciers Almost All The Year And These Glaciers Are The Source Of Water In The Lake. The Road To Its Base Camp Is Open Usually From 1st Week Of August To Mid October At The Most. You Have To Stay Either At Keran Or Dewarin On Neelum Road And Have To Hire A 4X4 Vehicle To Get There Or Can Stay At The Base Camp Also. There Are Camps Available On Rent At Base Camp And One Can Use His/Her Own Camp Also As There Is Camping Sites Available. The Bikers Can Also Go Up To Base Camp. The Reasonable Food And Water Is Available At The Base Camp.The Wash Rooms Are Also Available But Not Very Clean . There Are No Wash Rooms Uphill After The Base Camp. From Base Camp To Reach The Lake, There Are Two Options I:e Either To Go On Horses Or Hike. </p>
          
      </div>

      </section>

      {/* <!-- about section ends -->

      {/* <!-- shop section ends -->

      <!-- packages section starts  --> */}


      {/* <!-- packages section ends -->

      <!-- reviews section starts  --> */}

      <section className="reviews" id="reviews">

      <h1 className="heading">client's reviews</h1>

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
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="slide">
          <p className="text">We would recommend TrekBuddy and will be using them again in the future Kristy and her team gave us excellent service And have an amazing time</p>
                  <div className="user">
                      <img src={require('../images/pic-1.png')} /> 
                      {/* <img src="images/pic-1.png" alt=""> */}
                      <div className="info">
                          <h3>john deo</h3>
                      </div>
                  </div>
                </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <p className="text">I loved every moment & cannot wait to go back again. Booking with TrekBuddy was professional, easy & went without a hitch. Thank you to Lisa Scull and your team.</p>
                  <div className="user">
                      <img src={require('../images/pic-2.png')} /> 
                      {/* <img src="images/pic-2.png" alt=""> */}
                      <div className="info">
                          <h3>Carol Blair</h3>
                      </div>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <p className="text">Really happy with the response to enquiries, and the helpfulness of staff when we needed to adjust a couple of little things.Great holiday and great experience with TrekBuddy</p>
                  <div className="user">
                      <img src={require('../images/pic-3.png')} /> 
                      {/* <img src="images/pic-3.png" alt=""> */}
                      <div className="info">
                          <h3>Malcolm Dunnett</h3>
                      </div>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                  <div className="user">
                      <img src={require('../images/pic-4.png')} /> 
                      {/* <img src="images/pic-4.png" alt=""> */}
                      <div className="info">
                          <h3>john deo</h3>
                          <span>designer</span>
                      </div>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                  <div className="user">
                      <img src={require('../images/pic-5.png')} /> 
                      {/* <img src="images/pic-5.png" alt=""> */}
                      <div className="info">
                          <h3>john deo</h3>
                          <span>designer</span>
                      </div>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                  <div className="user">
                      <img src={require('../images/pic-6.png')}  /> 
                      {/* <img src="images/pic-6.png" alt=""> */}
                      <div className="info">
                          <h3>john deo</h3>
                          <span>designer</span>
                      </div>
                  </div>
            </div>
        </SwiperSlide>
      </Swiper>


      </section>

      {/* <!-- reviews section ends -->

      <!-- services section starts  --> */}

      <section className="services">

      <h1 className="heading"> Upcoming Features </h1>

      <div className="box-container">

          <div className="box">
              <img src={require('../images/serv-1.png')} /> 
              {/* <img src="images/serv-1.png" alt=""> */}
              <h3>complete guide</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
              <a href="#" className="btn">read more</a>
          </div>

          <div className="box">
              <img src={require('../images/serv-2.png')} /> 
              {/* <img src="images/serv-2.png" alt=""> */}
              <h3>custom packages</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
              <a href="#" className="btn">read more</a>
          </div>

          <div className="box">
              <img src={require('../images/serv-3.png')} /> 
              {/* <img src="images/serv-3.png" alt=""> */}
              <h3>family trips</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
              <a href="#" className="btn">read more</a>
          </div>

          <div className="box">
              <img src={require('../images/serv-4.png')} /> 
              {/* <img src="images/serv-4.png" alt=""> */}
              <h3>train guides</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
              <a href="#" className="btn">read more</a>
          </div>

          <div className="box">
              <img src={require('../images/serv-5.png')} /> 
              {/* <img src="images/serv-5.png" alt=""> */}
              <h3>adventure trail</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
              <a href="#" className="btn">read more</a>
          </div>

          <div className="box">
              <img src={require('../images/serv-6.png')} /> 
              {/* <img src="images/serv-6.png" alt=""> */}
              <h3>various adventures</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
              <a href="#" className="btn">read more</a>
          </div>
          
      </div>

      </section>

      {/* <!-- services section ends -->

      <!-- blogs section starts  --> */}

      {/* <!-- blogs section ends -->

      <!-- newsletter section  --> */}

       <section className="newsletter">

          <div className="content">
              <h1 className="heading">subscirbe now</h1>
              <p>Subscribe to my email list for exclusive travel tips, hacks, and other resources to save time and money! JOIN NOW!</p>
              <form action="">
                  <input type="email" name="" placeholder="enter your email" id="" className="email"></input>
                  <input type="submit" value="subscirbe" className="btn"></input>
              </form>
          </div>

      </section> 

      <section className="clients">



      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide">
                <img src={require('../images/client-logo-1.png')}/> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <img src={require('../images/client-logo-2.png')} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <img src={require('../images/client-logo-3.png')} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
                <img src={require('../images/client-logo-4.png')} />
            </div>
        </SwiperSlide>
      </Swiper>

      </section>

      {/* <!-- footer section starts  --> */}

      <section className="footer">

            <div className="box-container">

          <div className="box">
              <h3>quick links</h3>
              <a href="#home">home</a>
              <a href="#about">about</a>
              <a href="#reviews">reviews</a>
              <a href="#blogs" onClick={()=>navigate("/blogs")}>blogs</a>
              
          </div>

            <div className="box">
                <h3>extra links</h3>
                <a href="#">my account</a>
                <a href="#">my order</a>
                <a href="#">my wishlist</a>
                <a href="#">ask questions</a>
                <a href="#">terms of use</a>
                <a href="#">privacy policy</a>
            </div>

          <div className="box">
              <h3>contact info</h3>
              <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
              <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>
              <a href="#"> <i className="fas fa-envelope"></i> trekbuddy@gmail.com </a>
              <a href="#"> <i className="fas fa-map"></i> Lahore, Pakistan - 54000 </a>
          </div>

          <div className="box">
              <h3>follow us</h3>
              <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
              <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
              <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
              <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
              <a href="#"> <i className="fab fa-github"></i> github </a>
          </div>

      </div>

      <div className="credit">created by <span>TrekBuddy Team</span> | all rights reserved!</div>

      </section>

    </div>);
}

export default Home