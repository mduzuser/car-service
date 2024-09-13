import React from "react";
import { S2a } from "../../source/import/import";

function Service2a() {
  return (
    <>
      <div className="service2a">
        <div className="container">
          <div className="service2a__text">
            <p className="service2a__text-title">Auto transport</p>

            <p className="service2a__text-info">
              We deal with many trusted transport companies which gives us the
              advantage of safety and promptly delivering your vehicle from the
              auction to our place for the good value
            </p>

            <button className="service2a__text-btn">Contact us to learn more</button>
          </div>
        </div>

        <div className="service2a__img">
            <img src={S2a} alt="opps !" />
        </div>
      </div>
    </>
  );
}

export default Service2a;
