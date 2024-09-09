import "./home.scss";
import { MainImg } from "../../source/import/import";

function Section1() {
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

            <button className="section1__text-btn">Contact us</button>
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
