import * as React from "react";

import drishti from "/pics/drishti.png";

function NavBar({ lang, setLang: pushLang }) {
  return (
    <div className="nav-bar">
      <img src={drishti} alt="Logo" />
    </div>
  );
}

export default NavBar;
