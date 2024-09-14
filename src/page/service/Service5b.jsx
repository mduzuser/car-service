import React from "react";
import { S5b1, S5b2 } from "../../source/import/import";

function Service5b() {
  return (
    <>
      <div className="container">
        <div className="service5b">
          <div className="service5b__box">
            <div className="service5b__box-header">
              <p className="service5b__name">Floor loading</p>

              <div className="service5b__box-line"></div>
            </div>

            <div className="service5b__box-body">
              <div className="service5b__info">
                <p>
                  The motorcycle lashed with straps and additionally reinforced
                  with wooden blocks.
                </p>
              </div>

              <div className="service5b__img">
                <img src={S5b1} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service5b__box">
            <div className="service5b__box-header">
              <p className="service5b__name">Ramps loading</p>

              <div className="service5b__box-line"></div>
            </div>

            <div className="service5b__box-body">
              <div className="service5b__info">
                <p>
                  The motorcycle tires fixed on wooden ramps and secured with
                  straps.
                </p>
              </div>

              <div className="service5b__img">
                <img src={S5b2} alt="opps!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service5b;
