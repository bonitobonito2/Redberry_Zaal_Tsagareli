import Select from "react-select";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./EmployeeForm.module.css";
import Input from "../../UI/Input";
import UseValidation from "../../../Hooks/useValidation";
function EmployeeForm(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [choosenPosition, setChoosenPosition] = useState(null);
  const [choosenTeam, setChoosenTeam] = useState(null);
  const [taemIsChoosen, setTeamisChoosen] = useState(false);
  const [positionIsChoosen, setPositionisChoosen] = useState(false);
  const {
    inputValue: inputValueOfName,
    checkIfInputIsValid: nameCheker,
    isValid: nameIsValid,
    isTouched: nameIsTouched,
    touchHandler: nameTouchHandler,
    errorText: nameError,
  } = UseValidation("name");

  const {
    inputValue: inputValueOflastName,
    checkIfInputIsValid: lastNameCheker,
    isValid: lastNameIsValid,
    isTouched: lastNameIsTouched,
    touchHandler: lastNameTouchHandler,
    errorText: lastNameError,
  } = UseValidation("lastname");

  const {
    inputValue: inputValueOfemail,
    checkIfInputIsValid: emailCheker,
    isValid: emailIsValid,
    isTouched: emailIsTouched,
    touchHandler: emailTouchHandler,
    errorText: emailError,
  } = UseValidation("email");

  const {
    inputValue: inputValueOfnumber,
    checkIfInputIsValid: numberCheker,
    isValid: numberIsValid,
    isTouched: numberIsTouched,
    touchHandler: numberTouchHandler,
    errorText: numberError,
  } = UseValidation("number");

  useEffect(() => {
    console.log(nameIsValid, emailIsValid, numberIsValid, lastNameIsValid);
    if (
      nameIsValid &&
      emailIsValid &&
      numberIsValid &&
      lastNameIsValid &&
      positionIsChoosen &&
      taemIsChoosen
    ) {
      setFormIsValid(true);
    }else{
      setFormIsValid(false)
    }
  }, [
    positionIsChoosen,
    taemIsChoosen,
    emailIsValid,
    numberIsValid,
    nameIsValid,
    lastNameIsValid,
  ]);
  console.log(numberIsValid, "number");
  console.log(formIsValid, "formisValid");
  const optionsForTeam = props.teams.map((value) => {
    return { value: value.name, label: value.name };
  });
  const optionsForPosition = props.positions.map((value) => {
    return { value: value.name, label: value.name };
  });
  const teamChangeHandler = (selectedOption) => {
    setTeamisChoosen(true);
    setChoosenTeam(selectedOption);
  };
  const positionChangeHandler = (selectedOption) => {
    setPositionisChoosen(true);
    setChoosenPosition(selectedOption);
  };

  return (
    <Fragment>
      <div className={classes.nameAndLastName}>
        <div className={classes.nameDiv}>
          <Input
            isValid={nameIsValid}
            touchHandler={nameTouchHandler}
            isTouched={nameIsTouched}
            errorText={nameError}
            value={inputValueOfName}
            nameChaker={nameCheker}
            name="სახაელი:"
            requirments="   მინიმუმ 2 სიმბოლო, ქართული ასოები"
          />
        </div>
        <div className={classes.nameDiv}>
          <Input
            isValid={lastNameIsValid}
            touchHandler={lastNameTouchHandler}
            isTouched={lastNameIsTouched}
            errorText={lastNameError}
            value={inputValueOflastName}
            nameChaker={lastNameCheker}
            name="გვარი:"
            requirments="   მინიმუმ 2 სიმბოლო, ქართული ასოები"
          />
        </div>
      </div>

      <div className={classes.team}>
        <Select
          options={optionsForTeam}
          placeholder="თიმი"
          onChange={teamChangeHandler}
        />
      </div>

      <div className={classes.team}>
        <Select
          options={optionsForPosition}
          placeholder="პოზიცია"
          onChange={positionChangeHandler}
        />
      </div>
      <div className={classes.fullInput}>
        <div className={classes.inputDiv}>
          <Input
            type="email"
            isValid={emailIsValid}
            touchHandler={emailTouchHandler}
            isTouched={emailIsTouched}
            errorText={emailError}
            value={inputValueOfemail}
            nameChaker={emailCheker}
            name="მეილი:"
            requirments="   უნდა მთავრდებოდეს @redberry.ge-ით"
          />
        </div>
      </div>

      <div className={classes.fullInput}>
        <div className={classes.inputDiv}>
          <Input
            isValid={numberIsValid}
            touchHandler={numberTouchHandler}
            isTouched={numberIsTouched}
            errorText={numberError}
            value={inputValueOfnumber}
            nameChaker={numberCheker}
            type="text"
            placeholder = '+995'
            name="ტელეფონის ნომერი:"
            requirments=" უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button
           disabled={!formIsValid}
          className = {!formIsValid ? classes.disabled : classes.active }
          onClick={() => props.changePage("leptop")}
        >
          შემდეგი
        </button>
      </div>
    </Fragment>
  );
}

export default EmployeeForm;
