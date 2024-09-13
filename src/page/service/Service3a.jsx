import React from "react";
import { S3a } from "../../source/import/import";

function Service3a() {
  return (
    <>
      <div className="service3a">
        <div className="container">
          <div className="service3a__text">
            <p className="service3a__text-title">Warehousing</p>

            <p className="service3a__text-info">
              We offer complete line of warehousing services. We can receive
              your goods, segregate them as needed, and store/prepare them for
              final destination. We handle warehousing services for all
              commodities including automobiles, general cargo, heavy machinery,
              boats, ATVs and any other cargo.
            </p>

            <button className="service3a__text-btn">Contact us to learn more</button>
          </div>
        </div>

        <div className="service3a__img">
          <img src={S3a} alt="opps!" />
        </div>
      </div>
    </>
  );
}

export default Service3a;
