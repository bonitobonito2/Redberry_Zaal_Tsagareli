import React, { Fragment } from "react";
import classes from "./Input.module.css";
function Input(props) {
  return (
    <Fragment>
      <span
        className={
          props.isTouched && props.errorText && props.isValid !== true
            ? classes.errorTitle
            : classes.title
        }
      >
        {props.name}
      </span>
      <input
        onFocus={props.touchHandler}
        ref={props.value}
        onChange={props.nameChaker}
        className={
          props.isTouched && props.errorText && props.isValid !== true
            ? classes.Errorinput
            : classes.input
        }
        placeholder={props.placeholder ? props.placeholder : props.name}
      />
      <span
        className={
          props.isTouched && props.errorText && props.isValid !== true
            ? classes.error
            : classes.requirments
        }
      >
        {props.requirments}
      </span>{" "}
    </Fragment>
  );
}

export default Input;
