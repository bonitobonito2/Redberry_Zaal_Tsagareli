import React from "react";
import classes from "./UserInformation.module.css";
function UserInformation(props) {
  console.log(props.team, "xd");
  const team = props.team.filter((data) => data.id === props.user.team_id);

  const position = props.position.filter(
    (data) => data.id === props.user.position_id
  );
  console.log(props, "mevar");
  return (
    <div className={classes.userInformation}>
      <div className={classes.laptopPic}>
        <img src={`https://pcfy.redberryinternship.ge/${props.pic}`} />
      </div>
      <div className={classes.userInformationDetails}>
        <div className={classes.detail}>
          <span className={classes.key}>სახელი:</span>
          <span>{props.user.name} {props.user.surname}</span>
        </div>

        <div className={classes.detail}>
          <span className={classes.key}>თიმი:</span>
          <span>{team[0]["name"]}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>პოზიცია:</span>
          <span>{position[0]['name']}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>მეილი:</span>
          <span>{props.user.email}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>ტელ.ნომერი:</span>
          <span>{props.user.phone_number}</span>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
