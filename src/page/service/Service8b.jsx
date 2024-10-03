import React from "react";
import { S8b1, S8b2, S8b3, S8b4 } from "../../source/import/import";

function Service8b() {
  return (
    <>
      <div className="container">
        <div className="service8b">
          <p className="service8b__title">Our options for dismantling</p>

          <div className="service8b__box">
            <div className="service8b__box-header">
              <p className="service8b__name">3 Piece cutting</p>

              <div className="service8b__box-line"></div>
            </div>

            <div className="service8b__box-body">
              <div className="service8b__info">
                <p>
                  Vehicle is cut in 3 pieces: front cut, rear cut, roof cut. We
                  will remove parts to make safe loading such as hood, fenders,
                  headlights, trunk, real lights. Carpet and wire are not
                  available in this option.
                </p>
                <br />
                <p>
                  Approximate quantity to fit in 40ft container is 6-9 cars,
                  based on type of cars and type of loading you choose.
                </p>
              </div>

              <div className="service6b__img">
                <img src={S8b1} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service8b__box">
            <div className="service8b__box-header">
              <p className="service8b__name">Front cut</p>

              <div className="service8b__box-line"></div>
            </div>

            <div className="service8b__box-body">
              <div className="service8b__info">
                <p>
                  Only front cut is made and all requested parts removed from
                  the vehicle. We will remove parts to make safe loading such as
                  hood, fenders and bumper. Carpet and wires are available in
                  this option. Approximate quantity to fit in 40ft container
                  12-18 cars based on type of cars.
                </p>
              </div>

              <div className="service6b__img">
                <img src={S8b2} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service8b__box">
            <div className="service8b__box-header">
              <p className="service8b__name">Full dismantling</p>

              <div className="service8b__box-line"></div>
            </div>

            <div className="service8b__box-body">
              <div className="service8b__info">
                <p>
                  We especially recommend this option for auto parts dealers. It
                  is a super economical method. We will remove all parts from
                  the vehicle. Only empty shell will be disposed. Carpet and
                  wires included in this option.
                </p>
                <br />
                <p>
                  Approximate quantity to fit in 40ft container is 14-20 cars
                  based on type of cars, quantity of parts requested. This
                  option is good for those who want to sell separate parts and
                  don’t need further dismantling.
                </p>
              </div>

              <div className="service6b__img">
                <img src={S8b3} alt="opps!" />
              </div>
            </div>
          </div>

          <div className="service8b__box">
            <div className="service8b__box-header">
              <p className="service8b__name">Custom dismantling</p>

              <div className="service8b__box-line"></div>
            </div>

            <div className="service8b__box-body">
              <div className="service8b__info">
                <p>
                  We specialize in providing wide range of customs dismantling
                  and we can handle any special request.
                </p>
              </div>

              <div className="service6b__img">
                <img src={S8b4} alt="opps!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service8b;
