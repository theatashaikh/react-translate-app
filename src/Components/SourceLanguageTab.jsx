import React, { useContext } from "react";
import LanguageTab from "./LanguageTab";
import MainContext from "../MainContext";

function SourceLanguageTab() {
  let {
    srcLang,
    targetLang,
    srcLangText,
    setSrcLangText,
    setTargetLangText,
    setIsTranslating,
  } = useContext(MainContext);

  function handleChange(e) {
    setSrcLangText(e.target.value);
  }

  async function handleTranslate() {
    if (!srcLangText) {
      window.alert("Please enter something!");
      return false;
    }
    setIsTranslating(true);
    let response = await fetch(
      `https://api.mymemory.translated.net/get?q=${srcLangText}&langpair=${srcLang}|${targetLang}`
    );

    let translationObj = await response.json();
    let translation = translationObj.responseData.translatedText;

    setTargetLangText(translation);
    setIsTranslating(false);
  }

  return (
    <>
      <LanguageTab
        onChange={handleChange}
        id="src-lan-tab"
        placeholder="Write anything to translate..."
        disabled={false}
      />

      <button className="translate-btn" onClick={handleTranslate}>
        Translate
      </button>
    </>
  );
}

export default SourceLanguageTab;
