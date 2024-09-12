import React from "react";
import { SImg1a } from "../../source/import/import";

function Service1A() {
  return (
    <>
      <div className="service1a">
        <div className="container">
          <div className="service1a__text">
            <p className="service1a__title">Buying assistance</p>
            <button className="service1a__button">
              Contact us to learn more
            </button>
          </div>
        </div>
        <div className="service1a__img">
          <img src={SImg1a} alt="Service 1A" />
        </div>
      </div>
    </>
  );
}

export default Service1A;
