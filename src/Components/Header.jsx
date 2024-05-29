import React, { useContext } from "react";
import MainContext from "../MainContext";

function Header() {
  let { setIsModalOpen } = useContext(MainContext);

  return (
    <header>
      <div className="logo-area">
        <h2>
          <i class="fa-solid fa-language btn"></i>
        </h2>
        <div>
          <h2 style={{ fontWeight: "lighter" }}>ReactTranslateApp</h2>
          <p>Wow!!!, What an App.</p>
        </div>
      </div>
      <p style={{ cursor: "pointer" }}>
        <i
          onClick={() => setIsModalOpen(true)}
          class="fa-solid fa-clock-rotate-left"
        ></i>
      </p>
    </header>
  );
}

export default Header;
