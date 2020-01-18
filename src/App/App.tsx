import * as React from "react";
import { useState } from "react";

import NavBar from "./NavBar";
import { HIN, ENG } from "/shared/constants";
import Button from "/shared/Button";
import FileUpload from "/shared/FileUpload";

import "/styles/App.scss";

function App() {
  const [lang, setLang] = useState(ENG);
  const [file, setFile] = useState(null);

  const submit = () => {
    let route = "";
    switch (lang) {
      case HIN:
        route = "hindi";
      case ENG:
      default:
        route = "english";
    }

    let data = new FormData();

    data.append("file", file);

    fetch(`/${route}`, {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/form" }
    });
  };

  let p_value = "";

  if (file != null && file.name) {
    p_value = "Selected File: " + file.name;
  }

  return (
    <div className="app">
      <NavBar lang={lang} setLang={setLang} />
      <FileUpload setFile={setFile} onDrop={list => setFile(list[0])} />
      <p className="file-name">{p_value}</p>
      <Button name="Submit" onClick={submit} className="submit-btn" />
    </div>
  );
}

export default App;
