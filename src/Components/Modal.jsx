import React, { useContext } from "react";
import MainContext from "../MainContext";

function Modal() {
  let { isModalOpen, setIsModalOpen, history } = useContext(MainContext);
  return (
    <div className={`modal ${isModalOpen ? "modal-active" : "modal-deactive"}`}>
      <div className="modal-header">
        <h2>History</h2>
        <h2>
          <i
            onClick={() => setIsModalOpen(false)}
            class="btn fa-solid fa-xmark"
          ></i>
        </h2>
      </div>
      <br />
      <div className="modal-body">
        {history.map((obj, idx) => {
          return (
            <div key={idx} className="card">
              <h3>
                {`(${obj.srcLang}) `}
                {obj.srcLangText}
              </h3>
              <h3 style={{ fontWeight: "lighter" }}>
                {`(${obj.targetLang}) `}
                {obj.translation}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Modal;
