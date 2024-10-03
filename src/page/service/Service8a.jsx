import React, { useState } from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { s8a } from "../../source/import/import";

function Service8a() {
  // Holatni boshqarish uchun state yaratamiz
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  // Tugma bosilganda chaqiriladigan funksiya
  const handleClick = () => {
    setIsBoxVisible(true); // Tugma bosilganda boxni ko'rsatish uchun true qilamiz
  };
  return (
    <>
      <div className="service8a">
        <div className="container">
          <div className="service8a__main">
            <div className="service8a__main-text">
              <p className="service8a__main-title">Dismantling</p>

              <p className="service8a__main-info">
                Car dismantling services and auto parts delivery -
                cost-effective solutions for exporting salvage vehicles with
                further restoration on your side
              </p>

              <p className="service8a__main-info">
                We offer quality dismantling and cutting services. We can load
                up to 20 dismantled cars into a 40’ HC container. Numbers of the
                cars that we can load will vary depending on the way you
                dismantle the car.
              </p>

              {/* Agar holat false bo'lsa, tugmani ko'rsatadi */}
              {!isBoxVisible && (
                <button className="service8a__main-btn" onClick={handleClick}>
                  Contact us to learn more
                </button>
              )}

              {/* Agar holat true bo'lsa boxni ko'rsatadi */}
              {isBoxVisible && (
                <div className="show__box-contacts">
                  <a href="#">
                    <div className="show__box-contact blue">
                      <FaTelegram/>
                    </div>
                  </a>
                  <a href="#">
                    <div className="show__box-contact green">
                      <FaWhatsapp />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="service8a__img">
           <img src={s8a} alt="" />
        </div>
      </div>
    </>
  );
}

export default Service8a;
