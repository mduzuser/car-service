import React from "react";
import { S5a1, S5a2, S5a3, S5a4, S5a5, S5a6, SImg5a } from "../../source/import/import";

function Service5a() {
  return (
    <>
      <div className="service5a">
        <div className="container">
          <div className="service5a__main">
            <div className="service5a__main-text">
              <p className="service5a__main-title">Motorcycle loading</p>

              <p className="service5a__main-info">
                We will load your motorcycle and ATV into shipping containers.
                Using different container options, we take care of your
                motorcycle by lashing it safely to the container floor or deck.
              </p>
            </div>

            <div className="service5a__types">
                <p className="service5a__title">We load all types of motorcycles</p>

                <div className="service5a__box">
                    <div className="service5a__type">
                        <div className="service5a__type-img">
                            <img src={S5a1} alt="opps!" />
                        </div>

                        <p className="service5a__type-title">Cruisers</p>
                    </div>

                    <div className="service5a__type">
                        <div className="service5a__type-img">
                            <img src={S5a2} alt="opps!" />
                        </div>

                        <p className="service5a__type-title">Snowmobiles</p>
                    </div>

                    <div className="service5a__type">
                        <div className="service5a__type-img">
                            <img src={S5a3} alt="opps!" />
                        </div>

                        <p className="service5a__type-title">Scooters</p>
                    </div>

                    <div className="service5a__type">
                        <div className="service5a__type-img">
                            <img src={S5a4} alt="opps!" />
                        </div>

                        <p className="service5a__type-title">ATV’s</p>
                    </div>

                    <div className="service5a__type">
                        <div className="service5a__type-img">
                            <img src={S5a5} alt="opps!" />
                        </div>

                        <p className="service5a__type-title">Sport bikes</p>
                    </div>

                    <div className="service5a__type">
                        <div className="service5a__type-img">
                            <img src={S5a6} alt="opps!" />
                        </div>

                        <p className="service5a__type-title">Dirt bikes</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="service5a__img">
          <img src={SImg5a} alt="opps!" />
        </div>
      </div>
    </>
  );
}

export default Service5a;
