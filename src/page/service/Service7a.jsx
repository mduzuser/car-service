import React from "react";
import { S7a1, S7a2, S7a3, S7a4, S7a5, S7a6, SImg7a } from "../../source/import/import";

function Service7a() {
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
                    <img src={S7a1} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Trenchers</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S7a2} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Bulldozers</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S7a3} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Dump trucks</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S7a4} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Backhoes</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S7a5} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Excavators</p>
                </div>

                <div className="service6a__type">
                  <div className="service6a__type-img">
                    <img src={S7a6} alt="opps!" />
                  </div>

                  <p className="service6a__type-title">Loaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service6a__img">
          <img src={SImg7a} alt="opps!" />
        </div>
      </div>
    </>
  );
}

export default Service7a;
