import React, { Fragment } from "react";
import { useNavigate} from "react-router-dom";
import classes from "./ActionButtons.module.css";
function ActionButtons() {
  const navigate = useNavigate()
  const addRecordHandler = () => {
    navigate("/addRecord", { replace: false });
    
  };
  const goToRecordPage = ()=>{
    navigate('/records',{replace : false})
  }
  return (
    <Fragment>
      <button onClick={addRecordHandler} className={classes.button}>
        ჩანაწერის დამატება
      </button>
      <button onClick={goToRecordPage} className={classes.button}>ჩანაწერების სია</button>
    </Fragment>
  );
}

export default ActionButtons;
