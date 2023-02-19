import React from 'react'
import vg from "../asets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>

      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>We are your one and only solution to the tech problems you face every day. We are leading company whose aim is to increase the problem solving ability in children.</p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam ducimus perferendis voluptatum possimus facilis voluptate ut, eius, officiis sunt in enim sed, accusantium est recusandae qui cumque omnis minus. Voluptates cum quaerat error neque beatae esse consequatur expedita earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, non?</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{
              animationDelay: "1.0s",
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>

           

    </>
  )
}

export default Home