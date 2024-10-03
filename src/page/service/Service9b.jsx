import React from "react";

function Service9b() {
  return (
    <>
      <div className="container">
        <div className="service9b">
          <p className="service9b__title">How it works</p>

          <div className="service9b__boxes">
            <div className="service9b__box">
              <p className="service9b__box-title">Provide information</p>

              <p className="service9b__box-info">
                You’re providing information about the car model and the
                required spare part.
              </p>
            </div>

            <div className="service9b__box">
              <p className="service9b__box-title">We’re purchasing a part</p>

              <p className="service9b__box-info">
                We’re purchaising a part you need with the best market price.
              </p>
            </div>

            <div className="service9b__box">
              <p className="service9b__box-title">Delivery and part testing</p>

              <p className="service9b__box-info">
                After purchaising, the part will be sent to our yard for storage
                until departure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service9b;
