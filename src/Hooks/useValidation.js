import { useState, useRef } from "react";
import validateEmail from "../ValidationFunctions/emailValidation";
import phoneNumberValidation from "../ValidationFunctions/phoneNumberValidation";
import nameValidation from "../ValidationFunctions/nameValidation";
const UseValidation = (inputType = "text") => {
  const [isValid, setValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const inputValue = useRef("");
  const checkIfInputIsValid = () => {
    if (inputType === "name" || inputType === "lastname") {
      const check = nameValidation(inputValue.current.value);
      setValid(check);
      setErrorText(!check);
    }

    if (inputType === "email") {
      const check = validateEmail(inputValue.current.value);
      setValid(check);
      setErrorText(!check);
    }
    if (inputType === "number") {
      const check = phoneNumberValidation(inputValue.current.value);
      setErrorText(!check);
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
