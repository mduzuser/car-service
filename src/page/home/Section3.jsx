import React from 'react'
import { Img1, Img10, Img2, Img4, Img5, Img6, Img7, Img8, Img9 } from '../../source/import/import'

function Section3() {
  return (
    <>
      <div className="container">
          <p className="section3__title">Services we do</p>

          <div className="section3">
             <div className="section3__service1">
                <p>Buying assistance</p>

                <div className="section3__service1-img">
                    <img src={Img9} alt="img" />
                </div>
             </div>

             <div className="section3__service2">
                <p>Auto transport</p>

                <div className="section3__service1-img">
                    <img src={Img2} alt="img" />
                </div>
             </div>

             <div className="section3__service3">
                <p>Warehousing</p>

                <div className="section3__service1-img">
                    <img src={Img1} alt="img" />
                </div>
             </div>
          </div>

          <div className="section3">
             <div className="section3__service1a">
                <p>Automobile <br /> loading</p>

                 <div className="section3__service1-img">
                    <img src={Img10} alt="img" />
                 </div>
             </div>

             <div className="section3__service2a">
                <p>Motorcycle <br /> loading</p>

                <div className="section3__service1-img">
                    <img src={Img4} alt="img" />
                 </div>
             </div>

             <div className="section3__service3a">
                <p>Boat <br /> loading</p>

                <div className="section3__service1-img">
                    <img src={Img5} alt="img" />
                 </div>
             </div>
          </div>

          <div className="section3">
             <div className="section3__service1">
                <p>Heavy <br /> machinery <br /> loading</p>

                <div className="section3__service1-img">
                    <img src={Img6} alt="img" />
                 </div>
             </div>

             <div className="section3__service2">
                <p>Dismantling</p>

                <div className="section3__service1-img">
                    <img src={Img7} alt="img" />
                 </div>
             </div>

             <div className="section3__service3">
                <p>Parts purchase <br /> assistance</p>

                <div className="section3__service1-img">
                    <img src={Img8} alt="img" />
                 </div>
             </div>
          </div>

         <div className="section3__button">
             <button className="section3__btn">MORE ABOUT SERVICES</button>
         </div>
      </div>
    </>
  )
}

export default Section3     