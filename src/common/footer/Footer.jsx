import { FaTelegramPlane, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FooterForm, LogoF } from "../../source/import/import"
import { Link } from "react-router-dom"


function Footer() {
  return (
   <>
      <FooterForm/>
      <div className="footerBg">
          <div className="container">
              <div className="footer">
                  <div className="footer__boxes">
                      <div className="footer__logo">
                        <img src={LogoF} alt="Logo" />
                      </div>

                      <div className="footer__menu">
                          <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>Services</Link></li>
                            <li><Link>Contacts</Link></li>
                          </ul>
                      </div>

                      <div className="footer__details">
                          <div className="footer__social">
                              <a href="">
                                <FaWhatsapp/>
                              </a>

                              <a href="">
                                 <FaTelegramPlane/>
                              </a>

                              <a href="">
                                 <FaYoutube/>
                              </a>

                              <a href="">
                                 <FaTiktok/>
                              </a>
                          </div>

                          <a href="" className="footer__email">
                          info@mdashipping.us
                          </a>

                          <p className="footer__num">
                          +1 470 569 2965
                          </p>

                          <p className="footer__address">
                          3675 Crestwood Parkway, Suite 400, Duluth, GA, 30096, USA
                          </p>
                      </div>
                  </div>

                  <p className="footer__copy">Copyright © 2022 Cargo. All Rights reserved.</p>
              </div>
          </div>
      </div>
   </>
  )
}

export default Footer