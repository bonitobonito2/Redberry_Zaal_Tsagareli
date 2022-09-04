import React, { Fragment, useEffect, useState } from "react";
import token from "../../token/token";
import useHttpHook from "../../Hooks/useHttpHook";
import { useNavigate } from "react-router-dom";
import backButtonForPhone from '../../images/backButtonForPHone.png'
import classes from "./ListOfRecords.module.css";
import backButton from "../../images/backButton.png";
import Card from "./card/Card";
function ListOfRecords() {
  const [records, setRecords] = useState();
  const navigate = useNavigate()
  const [sendRequest, isLoading, error] = useHttpHook();
  const backBtnClickHandler = () => {
    navigate("/", { replace: false });
  };
  useEffect(() => {
    const requestConfig = {
      url: `https://pcfy.redberryinternship.ge/api/laptops?token=${token}`,
      type: "get",
    };
    sendRequest(requestConfig, setRecords);
  }, []);

  if (isLoading) return <p>loading</p>;
  if (!records) return <p>no records yet</p>;

  return (
    <Fragment>
      <div className={classes.back}>
        <img src={backButton} onClick={backBtnClickHandler} />
      </div>

      <div className={classes.backPhone}>
        <img src={backButtonForPhone} onClick={backBtnClickHandler} />
      </div>
      <center>
        <p style={{ fontSize: "20px", paddingBottom: "20px" }}>
          ჩანაწერების სია
        </p>
      </center>

      <div className={classes.recordPage}>
        {records.map((data) => {
          return <Card data={data} />;
        })}
      </div>
    </Fragment>
  );
}

export default ListOfRecords;
