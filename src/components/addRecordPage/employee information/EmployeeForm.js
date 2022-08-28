import Select from "react-select";
import React, { Fragment, useState } from "react";
import classes from "./EmployeeForm.module.css";

function EmployeeForm(props) {
  const [choosenPosition, setChoosenPosition] = useState(null);
  const [choosenTeam, setChoosenTeam] = useState(null);

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
          <span className={classes.title}>სახაელი:</span>
          <input placeholder="სახელი" />
          <span className={classes.requirments}>
            მინიმუმ 2 სიმბოლო, ქართული ასოები
          </span>
        </div>
        <div className={classes.nameDiv}>
          <span className={classes.title}>გვარი:</span>
          <input placeholder="გვარი" />
          <span className={classes.requirments}>
            მინიმუმ 2 სიმბოლო, ქართული ასოები
          </span>
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
          <span className={classes.title}>მეილი:</span>
          <input placeholder="მეილი" />
          <span className={classes.requirments}>
            უნდა მთავრდებოდეს @redberry.ge-ით
          </span>
        </div>
      </div>

      <div className={classes.fullInput}>
        <div className={classes.inputDiv}>
          <span className={classes.title}>ტელეფონის ნომერი:</span>
          <input placeholder="ტელეფონის ნომერი" />
          <span className={classes.requirments}>
            უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => props.changePage("leptop")}>შემდეგი</button>
      </div>
    </Fragment>
  );
}

export default EmployeeForm;
