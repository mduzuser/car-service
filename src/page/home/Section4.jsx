import React from "react";
import { SvgImg1, SvgImg2, SvgImg3, SvgImg4 } from "../../source/import/import";

function Section4() {
  return (
    <>
      <div className="container">
        <div className="section4">
          <p className="section4__title">How it works</p>

          <div className="section4__boxes">
            <div className="section4__box">
              <div className="section4__box-circle">
                <img src={SvgImg2} alt="img" />

                <div className="border"></div>
              </div>

              <div className="section4__box-text">
                <p className="section4__box-title">Bid and buy a lot</p>

                <p className="section4__box-info">
                  There's a wide variety of auctions where bargains can be had
                  at wholesale prices for buyers who know what they’re doing.
                </p>
              </div>
            </div>

            <div className="section4__box">
              <div className="section4__box-circle">
                <img src={SvgImg3} alt="img" />

                <div className="border"></div>
              </div>

              <div className="section4__box-text">
                <p className="section4__box-title">
                  Deliver your units from the auction to our yard
                </p>

                <p className="section4__box-info">
                  After bidding, the vehicle will be sent to our yard for
                  storage until departure.
                </p>
              </div>
            </div>

            <div className="section4__box">
              <div className="section4__box-circle">
                <img src={SvgImg1} alt="img" />

                <div className="border"></div>
              </div>

              <div className="section4__box-text">
                <p className="section4__box-title">
                  Load your vehicles into the container
                </p>

                <p className="section4__box-info">
                  At our loading facility your vehicle is driven into the
                  container and carefully positioned before all wheels are
                  safely checked.
                </p>
              </div>
            </div>

            <div className="section4__box">
              <div className="section4__box-circle">
                <img src={SvgImg4} alt="img" />

                <div className="border"></div>
              </div>

              <div className="section4__box-text">
                <p className="section4__box-title">
                  Buy all the spare parts if necessary
                </p>

                <p className="section4__box-info">
                  We offer original spare parts and components for the different
                  types of vehicles..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
