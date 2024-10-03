import React, { useState } from "react";
import { s9a } from "../../source/import/import";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

function Service9a() {
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
              <p className="service8a__main-title">Parts purchase assistance</p>

              <p className="service8a__main-info">
                We can provide our spare parts buying service for vehicles any
                make/model you need.
              </p>

              <p className="service8a__main-info">
                Simply tell us what you require, and we will do our best.
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
                      <FaTelegram />
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
          <img src={s9a} alt="" />
        </div>
      </div>
    </>
  );
}

export default Service9a;
