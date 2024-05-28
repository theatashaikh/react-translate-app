import React, { useContext } from "react";
import LanguageTab from "./LanguageTab";
import MainContext from "../MainContext";

function TargetLanguageTab() {
  let { targetLangText, isTranslating } = useContext(MainContext);
  return (
    <LanguageTab
      id="target-lang-tab"
      disabled={true}
      value={isTranslating ? "Translating..." : targetLangText}
    />
  );
}

export default TargetLanguageTab;
