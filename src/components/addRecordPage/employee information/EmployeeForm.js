import Select from "react-select";
import React, { Fragment, useState } from "react";
import classes from "./EmployeeForm.module.css";
import Input from "../../UI/Input";
import UseValidation from "../../../Hooks/useValidation";
function EmployeeForm(props) {
  const [choosenPosition, setChoosenPosition] = useState(null);
  const [choosenTeam, setChoosenTeam] = useState(null);
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

  const optionsForTeam = props.teams.map((value) => {
    return { value: value.name, label: value.name };
  });
  const optionsForPosition = props.positions.map((value) => {
    return { value: value.name, label: value.name };
  });
  const teamChangeHandler = (selectedOption) => setChoosenTeam(selectedOption);
  const positionChangeHandler = (selectedOption) =>
    setChoosenPosition(selectedOption);

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
            name="ტელეფონის ნომერი:"
            requirments=" უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => props.changePage("leptop")}>შემდეგი</button>
      </div>
    </Fragment>
  );
}

export default EmployeeForm;
