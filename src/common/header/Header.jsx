import { NavLink } from "react-router-dom";
import { Logo } from "../../source/import/import";
import "./header.scss";
import { FaTelegram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";

function Header() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const [active, setActive] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true); // Sidebarni ochadi
  };

  const closeSidebar = () => {
    setIsOpen(false); // Sidebarni yopadi
  };

  return (
    <div className={active ? "activeNav" : "header"}>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar__main">
          <div className="sidebar__logo">
            <img src={Logo} alt="logo" />
          </div>

          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/service'}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>

          <div className="sidebar__social">
            <div className="sidebar__social-media">
              <a href="">
                <FaTelegram />
              </a>
            </div>
            <div className="sidebar__social-media">
              <a href="">
                <FaWhatsapp />
              </a>
            </div>
            <div className="sidebar__social-media">
              <a href="">
                <FaYoutube />
              </a>
            </div>
            <div className="sidebar__social-media">
              <a href="">
                <FaTiktok />
              </a>
            </div>
          </div>

          <a href="" className="sidebar__email">
            info@cargo.us
          </a>

          <p className="sidebar__num">+1 912 000 0000</p>

          <div className="sidebar__langs">
            <button
              className={activeButton === 1 ? "blue" : "default"}
              onClick={() => handleButtonClick(1)}
            >
              EN
            </button>
            <p>/</p>
            <button
              className={activeButton === 2 ? "blue" : "default"}
              onClick={() => handleButtonClick(2)}
            >
              RU
            </button>
          </div>
        </div>

        <div className="sidebar__close">
          <button onClick={closeSidebar}>
            <MdOutlineChevronLeft />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="navbar__menu">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/service"}>Services</NavLink>
              </li>

              <li>
                <NavLink to={"/contact"}>Contacts</NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar__social">
            <div className="navbar__social-media">
              <a href="https://t.me/mda_ship">
                <FaTelegram />
              </a>
            </div>

            <div className="navbar__social-media">
              <a href="https://wa.me/14705692965">
                <FaWhatsapp />
              </a>
            </div>

            <div className="navbar__social-media">
              <a href="https://youtube.com/@mda_shipping">
                <FaYoutube />
              </a>
            </div>

            <div className="navbar__social-media">
              <a href="https://www.tiktok.com/@mda_shipping?_t=8aPxpauMdOo">
                <FaTiktok />
              </a>
            </div>
          </div>

          <div className="navbar__langs">
            <button
              className={activeButton === 1 ? "blue" : "default"}
              onClick={() => handleButtonClick(1)}
            >
              EN
            </button>

            <p>/</p>

            <button
              className={activeButton === 2 ? "blue" : "default"}
              onClick={() => handleButtonClick(2)}
            >
              RU
            </button>
          </div>

          <div className="navbar__bars" onClick={openSidebar}>
            <div className="navbar__bar"></div>
            <div className="navbar__bar"></div>
            <div className="navbar__bar"></div>
            <div className="navbar__bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
