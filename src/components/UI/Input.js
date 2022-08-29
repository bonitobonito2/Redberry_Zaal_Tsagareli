import React, { Fragment } from "react";
import classes from "./Input.module.css";
function Input(props) {
  return (
    <Fragment>
      <span className={classes.title}>{props.name}</span>
      
      <input className={classes.input} placeholder={props.placeholder ? props.placeholder : props.name} />
      <span className={classes.requirments}>{props.requirments}</span>
    </Fragment>
  );
}

export default Input;
