import Select from "react-select";
import React, { Fragment, useState } from "react";
import classes from "./EmployeeInformation.module.css";

function EmployeeInformation(props) {
  console.log(props, "xd");
  const [choosenTeam, setChoosenTeam] = useState(null);
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  const optionsForTeam = props.teams.map((value) => {
    return { value: value.name, label: value.name };
  });
  const optionsForPosition = props.positions.map((value) => {
    return { value: value.name, label: value.name };
  });
  const handleChange = (selectedOption) => setChoosenTeam(selectedOption);

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
          onChange={handleChange}
        />
      </div>

      <div className={classes.team}>
        <Select options={optionsForPosition} placeholder="პოზიცია" />
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
        <button>შემდეგი</button>
      </div>
    </Fragment>
  );
}

export default EmployeeInformation;
