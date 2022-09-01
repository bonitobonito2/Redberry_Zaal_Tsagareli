import React from "react";
import classes from "./succsesPage.module.css";
import { useNavigate } from "react-router-dom";
import succsesImage from "../../images/succses.png";
function SuccsesPage() {
  const navigate = useNavigate();
  const mainHandler = () => {
    navigate("/", { replace: true });
  };
  const handler = () => {
    alert("ჯერ არ დამატებულა სია");
  };
  return (
    <div className={classes.succses}>
      <div className={classes.succsesInformation}>
        <img className={classes.img} src={succsesImage} />
        <span>ჩანაწერი დამატებულია!</span>
        <button onClick={handler} className={classes.btn1}>
          სიაში გადაყვანა
        </button>
        <button onClick={mainHandler} className={classes.btn2}>
          მთავარი
        </button>
      </div>
    </div>
  );
}

export default SuccsesPage;
