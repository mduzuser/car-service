import React from "react";
import { A_car1, S4a } from "../../source/import/import";

function Service4a() {
  return (
    <>
      <div className="service4a">
        <div className="container">
          <div className="service4a__main">
            <div className="service4a__text">
              <p className="service4a__text-title">Automobile loading</p>

              <p className="service4a__text-info">
                Using different container size options, we take care of the
                vehicles by securing it safely in the container. Depending on
                the size of the container and dimmensions of your units, we can
                load up to 6 cars.
              </p>
            </div>

            <div className="service4a__types">
              <p className="service4a__types-title">
                We load all types of cars
              </p>

              <div className="service4a__types-box">
                <div className="service4a__type">
                  <div className="service4a__type-img">
                    <img src={A_car1} alt="opps!" />
                  </div>

                  <p className="service4a__type-title">Classic cars</p>
                </div>

                <div className="service4a__type">
                  <div className="service4a__type-img">
                    <img src={A_car1} alt="opps!" />
                  </div>

                  <p className="service4a__type-title">Sport cars</p>
                </div>

                <div className="service4a__type">
                  <div className="service4a__type-img">
                    <img src={A_car1} alt="opps!" />
                  </div>

                  <p className="service4a__type-title">Muscle cars</p>
                </div>

                <div className="service4a__type">
                  <div className="service4a__type-img">
                    <img src={A_car1} alt="opps!" />
                  </div>

                  <p className="service4a__type-title">Suvs</p>
                </div>

                <div className="service4a__type">
                  <div className="service4a__type-img">
                    <img src={A_car1} alt="opps!" />
                  </div>

                  <p className="service4a__type-title">Minivans</p>
                </div>

                <div className="service4a__type">
                  <div className="service4a__type-img">
                    <img src={A_car1} alt="opps!" />
                  </div>

                  <p className="service4a__type-title">Trucks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service4a__img">
          <img src={S4a} alt="opps!" />
        </div>
      </div>
    </>
  );
}

export default Service4a;
