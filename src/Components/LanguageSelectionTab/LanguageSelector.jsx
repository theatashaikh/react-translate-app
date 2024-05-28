import React from "react";
import langsArray from "../../languages";

function LanguageSelector() {
  return (
    <>
      {langsArray.map((lang) => {
        return (
          <>
            <option key={lang.code} value={lang.code}>
              {lang.language}
            </option>
          </>
        );
      })}
    </>
  );
}

export default LanguageSelector;
