import * as React from "react";
import { useState } from "react";

import NavBar from "./NavBar";
import { HIN, ENG } from "/shared/constants";
// import FileUpload from "/shared/FileUpload";
import FileUpload from "react-file-drop";

import "/styles/App.scss";

function App() {
  const [lang, setLang] = useState(ENG);
  const [file, setFile] = useState(null);

  return (
    <div>
      <NavBar lang={lang} setLang={setLang} />
      <FileUpload onDrop={evt => console.log({ evt })} />
    </div>
  );
}

export default App;
