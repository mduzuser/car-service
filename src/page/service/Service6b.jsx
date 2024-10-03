import React from "react";
import { S6b1, S6b2, S6b3 } from "../../source/import/import";

function Service6b() {
  return (
    <>
      <div className="container">
        <div className="service6b">
          <div className="service6b__box">
            <div className="service6b__box-header">
              <p className="service6b__name">Container shipment</p>

              <div className="service6b__box-line"></div>
            </div>

            <div className="service6b__box-body">
              <div className="service6b__info">
                <p>
                  Boats or yachts are often transported in containers as a
                  better alternative for cost effectiveness and security
                  reasons. We can offer flip loading for bigger boats that don’t
                  exceed 102 inches in beam width.
                </p>
              </div>

              <div className="service6b__img">
                <img src={S6b1} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service6b__box">
            <div className="service6b__box-header">
              <p className="service6b__name">Flat rack loading</p>

              <div className="service6b__box-line"></div>
            </div>

            <div className="service6b__box-body">
              <div className="service6b__info">
                <p>
                  Boats are transported on the platform and safely lashed. All
                  Flat Rack Shipment are passing NCB Inspection. Best option for
                  bigger boat that don’t exceed 36 feet in length.
                </p>
              </div>

              <div className="service6b__img">
                <img src={S6b2} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service6b__box">
            <div className="service6b__box-header">
              <p className="service6b__name">On deck cargo</p>

              <div className="service6b__box-line"></div>
            </div>

            <div className="service6b__box-body">
              <div className="service6b__info">
                <p>
                  Boats or yachts are loaded/ unloaded directly from the sea or
                  from the shore. Yachts Ships or cranes in cradles are utilized
                  to load bigger boats or yachts.
                </p>
              </div>

              <div className="service6b__img">
                <img src={S6b3} alt="opps!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service6b;
