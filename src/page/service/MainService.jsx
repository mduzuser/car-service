import { Link } from "react-router-dom";
import {
  Img1,
  Img10,
  Img2,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../../source/import/import";
import "./service.scss";

function MainService() {
  return (
    <>
      <div className="container">
        <div className="mainService">
          <p className="mainService__title">Service</p>

          <div className="mainService__boxes">
            <div className="mainService__box">
              <div className="mainService1">
                <Link to={"/service1"}>
                  <p className="mainService__box-title">Buying assistance</p>

                  <img src={Img9} alt="Opps!" />
                </Link>
              </div>

              <div className="mainService2">
                <Link to={"/service2"}>
                  <p className="mainService__box-title">Auto transport</p>

                  <img src={Img2} alt="Opps!" />
                </Link>
              </div>

              <div className="mainService3">
                <Link to={"/service3"}>
                  <p className="mainService__box-title">Warehousing</p>

                  <img src={Img1} alt="Opps!" />
                </Link>
              </div>
            </div>

            <div className="mainService__box">
              <div className="mainService1a">
                <Link to={"/service4"}>
                  <p className="mainService__box-title">Buying assistance</p>

                  <img src={Img10} alt="Opps!" />
                </Link>
              </div>

              <div className="mainService2a">
                <Link to={"/service5"}>
                  <p className="mainService__box-title">Auto transport</p>

                  <img src={Img4} alt="Opps!" />
                </Link>
              </div>

              <div className="mainService3a">
                <Link to={"/service6"}>
                  <p className="mainService__box-title">Warehousing</p>

                  <img src={Img5} alt="Opps!" />
                </Link>
              </div>
            </div>

            <div className="mainService__box">
              <div className="mainService1">
                <Link to={"/service7"}>
                  <p className="mainService__box-title">Buying assistance</p>

                  <img src={Img6} alt="Opps!" />
                </Link>
              </div>

              <div className="mainService2">
                <Link to={"/service8"}>
                  <p className="mainService__box-title">Auto transport</p>

                  <img src={Img7} alt="Opps!" />
                </Link>
              </div>

              <div className="mainService3">
                <Link to={"/service9"}>
                  <p className="mainService__box-title">Warehousing</p>

                  <img src={Img8} alt="Opps!" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mainService__about">
            <div className="mainService__q">
              <p>why you should choose us</p>
            </div>

            <div className="mainService__r">
              <p>
                We do business in the B2B field. Our target audience is car
                dealers, exporters and any other auto industry businesses.
              </p>

              <p>
                We can handle any kind of vehicles and are specialized in the
                automotive industry. Our well-organized logistics will help you
                get quality service in a reasonable time.
              </p>

              <p>
                We provide you the safest loading process and take care of all
                the export hassle. You will receive all the necessary documents
                as well as photo and video loading reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainService;
