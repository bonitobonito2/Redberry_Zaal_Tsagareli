import React from "react";
import classes from "./AddRecord.module.css";
import EmployeeInformation from "./employee information/EmployeeInformation";
function AddRecord() {
  return (
    <div className={classes.page}>
      <div className={classes.mainForm}>
        <EmployeeInformation />
      </div>
    </div>
  );
}

export default AddRecord;
