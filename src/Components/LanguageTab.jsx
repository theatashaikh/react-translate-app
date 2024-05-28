import React from "react";

function LanguageTab({ id, placeholder, onChange, disabled, value }) {
  return (
    <div className="language-tab">
      <textarea
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
      ></textarea>
    </div>
  );
}

export default LanguageTab;
