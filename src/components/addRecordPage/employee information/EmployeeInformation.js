import React, { Fragment } from "react";
import classes from "./EmployeeInformation.module.css";
function EmployeeInformation() {
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
        <select>
          <option className={classes.option}>bmw</option>
          <option>bmw</option>
          <option>bmw</option>
        </select>
      </div>

      <div className={classes.team}>
        <select>
          <option className={classes.option}>bmw</option>
          <option>bmw</option>
          <option>bmw</option>
        </select>
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
    </Fragment>
  );
}

export default EmployeeInformation;
