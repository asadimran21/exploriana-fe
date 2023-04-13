import React from 'react'
import '../style.css';
import Navbar from "../Navbar"
import Data from "../json/camps.json"

const Camps = ({setLoginUser}) =>  {
  return (
    <div>
      <Navbar setLoginUser={setLoginUser} />
      <section className="home" id="home">
        <div className="box" style= {{backgroundImage: "url('images/camp-bg.jpg')" }}>
        {/* style="background: url(images/home-bg-1.jpg) no-repeat;" */}
            <div className="content">
                <span>never stop</span>
                <h3>exploring</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                <a href="#" className="btn">get started</a>
            </div>
        </div>
      </section>
      
      {/* <h1 className="heading"> Camps Data </h1> */}
      <div className="box-container">
        {
          Data && Data.map( data => {
            return (
                
              <div className="box">
                <section className="about" id="about">

      <div className="image">
              <img src={data.image} />
      </div>

      <div className="content">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p> */}
          {/* <a href="#" className="btn">read more</a> */}
      </div>

      </section>
                </div>
              )
          } )
        }
          </div>
    </div>
  )
}

export default Camps