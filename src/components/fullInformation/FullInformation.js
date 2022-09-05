import React, { useEffect, useState } from "react";
import token from "../../token/token";
import classes from "./Fullinformation.module.css";
import { useNavigate } from "react-router-dom";
import backPhoneBtn from '../../images/backButtonForPHone.png'
import UserInformation from "./userInformation/UserInformation";
import backButton from "../../images/backButton.png";
import LaptopCondition from "./laptopCondition/LaptopCondition";
import useHttpHook from "../../Hooks/useHttpHook";
import LaptopInformation from "./laptopInformation/LaptopInformation";
import { useParams } from "react-router-dom";
function FullInformation() {
  const params = useParams();
  const navigate = useNavigate();
  const [sendRequest, isLoading] = useHttpHook();
  const [brands, setBrands] = useState();
  const [data, setData] = useState();
  const [team,setTeam] = useState();
  const [position,setPosition] = useState()
  const backBtnClickHandler = () => {
    navigate("/records", { replace: false });
  };
  useEffect(() => {
    const config = {
      url: `https://pcfy.redberryinternship.ge/api/laptop/${params.recordId}?token=${token}`,
      type: "get",
    };
    const configForBrand = {
      url: "https://pcfy.redberryinternship.ge/api/brands",
      type: "get",
    };

    const configForTeam = {
      url: "https://pcfy.redberryinternship.ge/api/teams",
      type: "get",
    };
    const configForPositions = {
      url: "https://pcfy.redberryinternship.ge/api/positions",
      type: "get",
    };
    sendRequest(configForBrand, setBrands);
    sendRequest(config, setData);
    sendRequest(configForTeam,setTeam)
    sendRequest(configForPositions,setPosition)
  }, [sendRequest,params.recordId]);
  if (isLoading) return <p>loading</p>;
  if (!data || !brands || !team || !position) return <p>something went wrong</p>;

  return (
    <div className={classes.information}>
      <div className={classes.back}>
        <img alt="" src={backButton} onClick={backBtnClickHandler} />
      </div>
      <div className={classes.backPhone}>
        <img alt="" src={backPhoneBtn} onClick={backBtnClickHandler} />
      </div>
      <div>
        <h2>ლეპტოპის ინფო</h2>
      </div>
      <br />
      <br />
      <UserInformation team = {team} position = {position} user={data.user} pic={data.laptop.image} />
      <LaptopInformation brands={brands} laptopInfo={data.laptop} />
      <LaptopCondition laptopInfo = {data.laptop} />
    </div>
  );
}

export default FullInformation;
