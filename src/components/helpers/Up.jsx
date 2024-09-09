import React, { useState } from "react";

function Up() {
  const [active, setActive] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <div className={active ? "up" : "upHidden"} onClick={handleScrollToTop}>
        <a href="#">
          <p>Up</p>
        </a>
      </div>
    </>
  );
}

export default Up;
