import React from "react";
import classes from "./UserInformation.module.css";
function UserInformation(props) {
  console.log(props);
  return (
    <div className={classes.userInformation}>
      <div className={classes.laptopPic}>
        <img src={`https://pcfy.redberryinternship.ge/${props.pic}`} />
      </div>
      <div className={classes.userInformationDetails}>
        <div className={classes.detail}>
          <span className={classes.key}>სახელი:</span>
          <span>{props.user.name}</span>
        </div>

        <div className={classes.detail}>
          <span className={classes.key}>თიმი:</span>
          <span>{props.user.team_id}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>პოზიცია:</span>
          <span>{props.user.name}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>მეილი:</span>
          <span>{props.user.name}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>ტელ.ნომერი:</span>
          <span>{props.user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
