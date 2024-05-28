import React, { useContext } from "react";
import LanguageSelector from "./LanguageSelector";
import MainContext from "../../MainContext";

function LanguageSelectionTab() {
  let { srcLang, setSrcLang, targetLang, setTargetLang } =
    useContext(MainContext);

  return (
    <center>
      <br />
      <div className="lang-sel-tab">
        <select
          value={srcLang}
          onChange={(e) => setSrcLang(e.target.value)}
          name="src-language"
          id="src-language"
        >
          <LanguageSelector />
        </select>
        <img
          src="src\assets\right-arrow.png"
          alt="right arrow"
          width="20"
          style={{ marginRight: "1rem", marginLeft: "1rem" }}
        />
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          name="target-language"
          id="target-language"
        >
          <LanguageSelector />
        </select>
      </div>
    </center>
  );
}

export default LanguageSelectionTab;
