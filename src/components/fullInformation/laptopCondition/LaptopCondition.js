import React from "react";
import classes from "./LaptopCondition.module.css";
function LaptopCondition(props) {
  return (
    <div className={classes.LaptopCondition}>
      <div className={classes.info}>
        <div className={classes.detail}>
          <span className={classes.key}>ლეპტოპის მდგომარეობა:</span>
          <span>
            {props.laptopInfo.status === "used" ? "მეორადი" : "ახალი"}
          </span>
        </div>

        <div className={classes.detail}>
          <span className={classes.key}>ლეპტოპის ფასი:</span>
          <span>{props.laptopInfo.price} ლ</span>
        </div>
      </div>
      <div className={classes.info}>
        {props.laptopInfo.purchase_date && (
          <div className={classes.detail}>
            <span className={classes.key}>შეძენის რიცხვი:</span>
            <span>{props.laptopInfo.purchase_date}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default LaptopCondition;
