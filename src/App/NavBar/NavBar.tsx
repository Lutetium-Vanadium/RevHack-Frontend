import * as React from "react";

import Button from "./Button";
import { HIN, ENG } from "/shared/constants";

function NavBar({ lang, setLang: pushLang }) {
  return (
    <div className="nav-bar">
      <Button name="English" selected={lang == ENG} onClick={() => pushLang(ENG)} />
      <Button name="Hindi" selected={lang == HIN} onClick={() => pushLang(HIN)} />
    </div>
  );
}

export default NavBar;
