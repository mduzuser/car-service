import React from "react";
import { S6b1, S6b2, S6b3, S7b1, S7b2 } from "../../source/import/import";

function Service7b() {
  return (
    <>
      <div className="container">
        <div className="service7b">
          <div className="service7b__box">
            <div className="service7b__box-header">
              <p className="service7b__name">Heavy machinery loading</p>

              <div className="service7b__box-lines"></div>
            </div>

            <div className="service7b__box-body">
              <div className="service7b__info">
                <p>
                  If your machinery is not running or it is too big, we
                  professionally dismantle it before loading. Dismantled
                  components are safely packed and loaded into a container along
                  with the rest of the cargo. It is the cheapest method of
                  shipping.
                </p>
              </div>

              <div className="service7b__img">
                <img src={S7b1} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service7b__box">
            <div className="service7b__box-header">
              <p className="service7b__name">Flat rack loading</p>

              <div className="service7b__box-line"></div>
            </div>

            <div className="service7b__box-body">
              <div className="service7b__info">
                <p>
                  We can load your machines and equipment on Flat Racks. We
                  secure your equipment safely and according to all maritime
                  standards.
                </p>
              </div>

              <div className="service7b__img">
                <img src={S7b2} alt="opps!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service7b;
