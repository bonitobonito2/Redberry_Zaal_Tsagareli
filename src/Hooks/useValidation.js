import { useState, useRef } from "react";

import nameValidation from "../ValidationFunctions/nameValidation";
const UseValidation = (inputType = "text") => {
  const [isValid, setValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [errorText, setErrorText] = useState("");
  const inputValue = useRef("");
  const checkIfInputIsValid = () => {
    if (inputType === "name" || inputType === 'lastname') {
      const check = nameValidation(inputValue.current.value);

      if (typeof check === "boolean") setValid(true);
      else {
        setErrorText(check[0]);
      }
    }
  };

  const touchHandler = (setFocus = true) => setIsTouched(setFocus);

  return {
    inputValue,
    checkIfInputIsValid,
    isValid,
    isTouched,
    touchHandler,
    errorText,
  };
};

export default UseValidation;
