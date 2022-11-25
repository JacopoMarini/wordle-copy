import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, largeKey, disabled }) {
  const { onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "INVIO") {
      onEnter();
    } else if (keyVal === "CANCELLA") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={largeKey ? "large" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;