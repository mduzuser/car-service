import React from "react";
import { S2a1, S2a2 } from "../../source/import/import";

function Service2b() {
  return (
    <>
      <div className="container">
        <div className="service2b">
          <div className="service2b__titles">
            <p className="service2b__title">Open trailer</p>

            <div className="service2b__line"></div>
          </div>

          <div className="service2b__boxes">
            <div className="service2b__text">
              <p className="service2b__text-name">
                Open Trailer auto shipping is known as most common type of auto
                transport.
              </p>

              <p className="service2b__text-adjust">Easy loading</p>

              <p className="service2b__text-adjust">Quick shipment</p>

              <p className="service2b__text-adjust">
                Cost - effective solution
              </p>

              <p className="service2b__text-info">
                We recommend for: Salvage cars, Used cars, Cars from auction
              </p>
            </div>

            <div className="service2b__img">
              <img src={S2a1} alt="opps!" />
            </div>
          </div>
        </div>

        <div className="service2b">
          <div className="service2b__titles">
            <p className="service2b__title">Enclosed trailer</p>

            <div className="service2b__line"></div>
          </div>

          <div className="service2b__boxes">
            <div className="service2b__text">
              <p className="service2b__text-name">
                Enclosed Trailer is the safest solution, but more expensive.
              </p>

              <p className="service2b__text-adjust">
                Protection against environmental conditions
              </p>

              <p className="service2b__text-adjust">
                Individual solution for handling of vehicles
              </p>

              <p className="service2b__text-info">
                We recommend for: Brand new, Exclusive and collectible cars. All
                our carriers have cargo insurance.
              </p>
            </div>

            <div className="service2b__img">
              <img src={S2a2} alt="opps!" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service2b;
