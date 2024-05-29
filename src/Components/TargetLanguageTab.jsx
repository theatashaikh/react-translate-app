import React, { useContext } from "react";
import LanguageTab from "./LanguageTab";
import MainContext from "../MainContext";
import langsArray from "../languages";

function TargetLanguageTab() {
  let { targetLang, targetLangText, isTranslating } = useContext(MainContext);
  let targetLangName = langsArray.filter((obj) => obj.code == targetLang)[0]
    .language;
  return (
    <LanguageTab
      id="target-lang-tab"
      disabled={true}
      placeholder="Translated text will appear here"
      value={
        isTranslating ? `Translating to ${targetLangName}...` : targetLangText
      }
    />
  );
}

export default TargetLanguageTab;
