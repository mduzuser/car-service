import React from "react";
import { S4b1, S4b2, S4b3, S4b4, S4b5, S4b6 } from "../../source/import/import";

function Service4b() {
  return (
    <>
      <div className="container">
        <div className="service4b">
          <div className="service4b__box">
            <div className="service4b__box-header">
              <p className="service4b__box-name">20 FT</p>

              <div className="service4b__box-line"></div>
            </div>

            <div className="service4b__box-body">
              <div className="service4b__box-text">
                <p className="service4b__box-title">20 FT / 1 CAR</p>

                <p className="servce4b__box-info">
                  The safiest way to load one car
                </p>
              </div>

              <div className="service4b__box-img">
                <img src={S4b1} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service4b__box">
            <div className="service4b__box-header">
              <p className="service4b__box-name">40HC & 45HC</p>

              <div className="service4b__box-line2"></div>
            </div>

            <div className="service4b__box-body">
              <div className="service4b__box-text">
                <p className="service4b__box-title">40HC / 2 CARS</p>

                <p className="servce4b__box-info">
                  The safiest way to load two cars in one container
                </p>
              </div>

              <div className="service4b__box-img">
                <img src={S4b2} alt="opps!" />
              </div>
            </div>

            <div className="service4b__box-body">
              <div className="service4b__box-text">
                <p className="service4b__box-title">40HC / 3 СARS</p>

                <p className="servce4b__box-info">
                  One car usually lifted and two cars on the floor
                </p>
              </div>

              <div className="service4b__box-img">
                <img src={S4b3} alt="opps!" />
              </div>
            </div>

            <div className="service4b__box-body">
              <div className="service4b__box-text">
                <p className="service4b__box-title">40HC / 4 CARS</p>

                <p className="servce4b__box-info">
                  Two cars always elevated and two secured on the floor. One of
                  the most cost-efficient ways
                </p>
              </div>

              <div className="service4b__box-img">
                <img src={S4b4} alt="opps!" />
              </div>
            </div>

            <div className="service4b__box-body">
              <div className="service4b__box-text">
                <p className="service4b__box-title">40HC / 5 CARS</p>

                <p className="servce4b__box-info">
                  Three cars elevated and two cars secured on the floor
                </p>
              </div>

              <div className="service4b__box-img">
                <img src={S4b5} alt="opps!" />
              </div>
            </div>

            <div className="service4b__box-body">
              <div className="service4b__box-text">
                <p className="service4b__box-title">40HC / 6 CARS</p>

                <p className="servce4b__box-info">
                  Three cars elevated and three secured on the floor
                </p>
              </div>

              <div className="service4b__box-img">
                <img src={S4b6} alt="opps!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service4b;
