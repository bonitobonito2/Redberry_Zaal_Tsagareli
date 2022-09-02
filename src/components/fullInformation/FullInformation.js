import React, { useEffect, useState } from "react";
import token from "../../token/token";
import classes from "./Fullinformation.module.css";
import { useNavigate } from "react-router-dom";
import UserInformation from "./userInformation/UserInformation";
import backButton from '../../images/backButton.png'
import useHttpHook from "../../Hooks/useHttpHook";
import { useParams } from "react-router-dom";
function FullInformation() {
  const params = useParams();
  const navigate = useNavigate()
  const [sendRequest, isLoading, error] = useHttpHook();
  const [data, setData] = useState();
  const backBtnClickHandler = ()=>{
    navigate('/records',{replace : false})
  }
  useEffect(() => {
    const config = {
      url: `https://pcfy.redberryinternship.ge/api/laptop/${params.recordId}?token=${token}`,
      type: "get",
    };
    sendRequest(config, setData);
  }, []);
  if (isLoading) return <p>loading</p>;
  if (!data) return <p>something went wrong</p>;
  console.log(data);
  return (
    <div className={classes.information}>
      <div className={classes.back}>
        <img src={backButton} onClick={backBtnClickHandler} />
      </div>
      <div>
        <h2>ლეპტოპის ინფო</h2>
      </div>
      <br />
      <br />
      <UserInformation user={data.user} pic={data.laptop.image} />
    </div>
  );
}

export default FullInformation;
