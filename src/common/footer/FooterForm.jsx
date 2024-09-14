import { FooterImg } from "../../source/import/import";
import "./footer.scss";

function FooterForm() {
  return (
    <>
      <div className="footerFormBg" id="contact">
        <div className="container">
          <div className="footerForm">
            <div className="footerForm__form">
              <p className="footerForm__form-title">Contact us</p>

              <p className="footerForm__form-info">
                Contact us if you need more information about our services
              </p>

              <form className="form">
                <input
                  type="text"
                  placeholder="Name"
                  className="form__input-name"
                  required
                />

                <input
                  type="number"
                  placeholder="Number"
                  className="form__input-number"
                  required
                />

                <input
                  type="text"
                  placeholder="Message"
                  className="form__input-message"
                  required
                />

                <div className="input__checkbox">
                  <input
                    type="checkbox"
                    id="1"
                    className="form__input-checkbox"
                  />

                  <p>
                    I agree with the <span>Privacy policy</span>
                  </p>
                </div>

                <input
                  type="submit"
                  className="form__input-submit"
                  value="SEND A MESSAGE"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="footerForm__img">
          <img src={FooterImg} alt="Footer img" />
        </div>
      </div>
    </>
  );
}

export default FooterForm;
