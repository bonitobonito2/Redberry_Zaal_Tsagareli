import Select from "react-select";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./EmployeeForm.module.css";
import Input from "../../UI/Input";
import UseValidation from "../../../Hooks/useValidation";
function EmployeeForm(props) {
  const [formIsValid, setFormIsValid] = useState(false);
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
    if (
      nameIsValid &&
      emailIsValid &&
      numberIsValid &&
      lastNameIsValid &&
      positionIsChoosen &&
      taemIsChoosen
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    positionIsChoosen,
    taemIsChoosen,
    emailIsValid,
    numberIsValid,
    nameIsValid,
    lastNameIsValid,
  ]);

  const optionsForTeam = props.teams.map((value) => {
    return { value: value.id, label: value.name };
  });
  const optionsForPosition = props.positions.map((value) => {
    console.log(value);
    return { value: value.value, label: value.name };
  });
  const teamChangeHandler = (selectedOption) => {
    localStorage.setItem("teamID", selectedOption.value);
    localStorage.setItem("team", selectedOption.label);
    setTeamisChoosen(true);
  };
  const positionChangeHandler = (selectedOption) => {
    localStorage.setItem("positionID", selectedOption.value);
    localStorage.setItem("position", selectedOption.label);
    setPositionisChoosen(true);
  };

  let selectedItem = localStorage.getItem("team");
  let selectedItemId = localStorage.getItem('teamID')
  let selectedPosition = localStorage.getItem("position");
  let selectedPositionId = localStorage.getItem('positionID')
  useEffect(() => {
    if (selectedItem) setTeamisChoosen(true);
    if (selectedPosition) setPositionisChoosen(true);
  }, []);

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
        {selectedItem ? (
          <Select
            options={optionsForTeam}
            onChange={teamChangeHandler}
            defaultValue={{ value: selectedItemId, label: selectedItem }}
          />
        ) : (
          <Select
            options={optionsForTeam}
            placeholder="თიმი"
            onChange={teamChangeHandler}
          />
        )}
      </div>

      <div className={classes.team}>
        {selectedPosition ? (
          <Select
            options={optionsForPosition}
            placeholder="პოზიცია"
            onChange={positionChangeHandler}
            defaultValue={{ value: selectedPositionId, label: selectedPosition }}
          />
        ) : (
          <Select
            options={optionsForPosition}
            placeholder="პოზიცია"
            onChange={positionChangeHandler}
          />
        )}
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
            placeholder="+995"
            name="ტელეფონის ნომერი:"
            requirments=" უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button
          disabled={!formIsValid}
          className={!formIsValid ? classes.disabled : classes.active}
          onClick={() => props.changePage("leptop")}
        >
          შემდეგი
        </button>
      </div>
    </Fragment>
  );
}

export default EmployeeForm;
