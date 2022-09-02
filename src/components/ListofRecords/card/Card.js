import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
function Card(props) {
  console.log(props);
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img
          src={`https://pcfy.redberryinternship.ge/${props.data.laptop.image}`}
        />
      </div>
      <div className={classes.information}>
        <span>{props.data.laptop.name} </span>
        <span>
          {props.data.user.name} {props.data.user.surname}
        </span>
        <br/>
        <Link to="/">მეტის ნახვა</Link>
      </div>
    </div>
  );
}

export default Card;
