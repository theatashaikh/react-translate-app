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
        <h2 style={{ color: "#fff", display: "inline", margin: "1rem" }}>
          <i class="fa-solid fa-arrow-right"></i>
        </h2>
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
