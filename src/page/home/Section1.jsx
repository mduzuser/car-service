import "./home.scss";
import { MainImg } from "../../source/import/import";
import { useState } from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

function Section1() {
  // Holatni boshqarish uchun state yaratamiz
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  // Tugma bosilganda chaqiriladigan funksiya
  const handleClick = () => {
    setIsBoxVisible(true); // Tugma bosilganda boxni ko'rsatish uchun true qilamiz
  };

  return (
    <>
      <div className="section1">
        <div className="container">
          <div className="section1__text">
            <p className="section1__text-title">
              We are an American based company professionally provide
              <span> auto auction participating</span>
            </p>

            <p className="section1__text-info">
              We ship cars, motorcycles, boats, special machinery in containers
              from the USA to all over the world.
            </p>

            {/* Agar holat false bo'lsa, tugmani ko'rsatadi */}
            {!isBoxVisible && (
              <button className="section1__text-btn" onClick={handleClick}>
                Contact us
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

        <div className="section1__img">
          <img src={MainImg} alt="IMG !!!" />
        </div>
      </div>
    </>
  );
}

export default Section1;
