import React, { Fragment, useEffect, useState } from "react";
import classes from "./Input.module.css";
import saveToLocalStorage from "../../helper/saveInformationToLocalStorage";
function Input(props) {
  console.log(props.type);
  const [localValue,setLocalValue] = useState('')
  const [currentValue,setCurrentValue] = useState('')
  const changeHandler = (event) => {
    props.nameChaker();
    saveToLocalStorage(event.target.value, props.name);
    setLocalValue(null)
    setCurrentValue(event.target.value)
  };
  useEffect(()=>{
   let data =  localStorage.getItem(props.name)
   setLocalValue(data)
   if(data){
    props.value.current.value = data
    props.nameChaker()
   }
  },[])
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
        type={props.type ? props.type : "text"}
        onFocus={props.touchHandler}
        ref={props.value}
        onChange={changeHandler}
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
