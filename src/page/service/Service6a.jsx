import React from "react";
import { S6a1, S6a2, S6a3, S6a4, S6a5, S6a6, SImg6a } from "../../source/import/import";

function Service6a() {
  return (
    <>
      <div className="service6a">
        <div className="container">
          <div className="service6a__main">
            <div className="service6a__main-text">
              <p className="service6a__main-title">Motorcycle loading</p>

              <p className="service6a__main-info">
                We will load your motorcycle and ATV into shipping containers.
                Using different container options, we take care of your
                motorcycle by lashing it safely to the container floor or deck.
              </p>
            </div>

            <div className="service6a__types">
              <p className="service6a__title">
                We load all types of motorcycles
              </p>

              <div className="service6a__box">
                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S6a1} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Cruisers</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S6a2} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Snowmobiles</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S6a3} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Scooters</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S6a4} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">ATV’s</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S6a5} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Sport bikes</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S6a6} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Dirt bikes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service6a__img">
          <img src={SImg6a} alt="opps!" />
        </div>
      </div>
    </>
  );
}

export default Service6a;
