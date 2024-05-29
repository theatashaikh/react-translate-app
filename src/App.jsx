import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SourceLanguageTab from "./Components/SourceLanguageTab";
import TargetLanguageTab from "./Components/TargetLanguageTab";
import LanguageSelectionTab from "./Components/LanguageSelectionTab/LanguageSelectionTab";
import MainContext from "./MainContext";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

function App() {
  let [srcLang, setSrcLang] = useState("en");
  let [targetLang, setTargetLang] = useState("ur");
  let [srcLangText, setSrcLangText] = useState("");
  let [targetLangText, setTargetLangText] = useState("");
  let [isTranslating, setIsTranslating] = useState(false);
  let [isModalOpen, setIsModalOpen] = useState(false);

  let [history, setHistory] = useState(
    localStorage.getItem("myapphistory")
      ? JSON.parse(localStorage.getItem("myapphistory"))
      : []
  );
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
        isModalOpen,
        setIsModalOpen,
        history,
        setHistory,
      }}
    >
      <Header />
      <LanguageSelectionTab />
      <div className="main-content">
        <SourceLanguageTab />
        <TargetLanguageTab />
        <Modal />
      </div>
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
