import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SourceLanguageTab from "./Components/SourceLanguageTab";
import TargetLanguageTab from "./Components/TargetLanguageTab";
import LanguageSelectionTab from "./Components/LanguageSelectionTab/LanguageSelectionTab";
import MainContext from "./MainContext";
import Footer from "./Components/Footer";

function App() {
  let [srcLang, setSrcLang] = useState("en");
  let [targetLang, setTargetLang] = useState("ur");
  let [srcLangText, setSrcLangText] = useState("");
  let [targetLangText, setTargetLangText] = useState("");
  let [isTranslating, setIsTranslating] = useState(false);
  return (
    <MainContext.Provider
      value={{
        srcLang,
        setSrcLang,
        targetLang,
        setTargetLang,
        srcLangText,
        setSrcLangText,
        targetLangText,
        setTargetLangText,
        isTranslating,
        setIsTranslating,
      }}
    >
      <Header />
      <LanguageSelectionTab />
      <div className="main-content">
        <SourceLanguageTab />
        <TargetLanguageTab />
      </div>
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
