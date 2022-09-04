import React, { useEffect, useState } from "react";
import useHttpHook from "../../Hooks/useHttpHook";
import { useNavigate } from "react-router-dom";
import classes from "./AddRecord.module.css";
import logo from "../../images/LOGO-10 1.png";
import { useSelector } from "react-redux";
import LeptopForm from "./leptop information/LeptopForm";
import backButton from "../../images/backButton.png";
import backButtonForPhone from "../../images/backButtonForPHone.png";
import EmployeeForm from "./employee information/EmployeeForm";
function AddRecord() {
  const [sendRequest] = useHttpHook();
  const [page, setPage] = useState("employee");
  const [teams, setTeams] = useState();
  const [brands, setBrands] = useState();
  const [cpus, setCpus] = useState();
  const [positions, setPositions] = useState();
  const navigate = useNavigate();
  const formIsValid = useSelector((data) => data.formISValidSlice.formIsValid);

  const nextPageClickHandler = () => {
    if (formIsValid) {
      setPage("leptop");
    } else {
      alert("შეავსეთ ფორმა, ერორების გარეშე, მოთხოვნები მითითებულია.");
    }
  };
  const backPageClickHandler = () => {
    setPage("employee");
  };
  const backBtnClickHandler = () => {
    if (page === "leptop") {
      setPage("employee");
    } else {
      navigate("/", { replace: false });
    }
  };

  useEffect(() => {
    let configForTeam = {
      url: "https://pcfy.redberryinternship.ge/api/teams",
      type: "get",
    };
    let configForPositions = {
      url: "https://pcfy.redberryinternship.ge/api/positions",
      type: "get",
    };
    let configForBrands = {
      url: "https://pcfy.redberryinternship.ge/api/brands",
      type: "get",
    };
    let configForCpus = {
      url: "https://pcfy.redberryinternship.ge/api/cpus",
      type: "get",
    };
    sendRequest(configForTeam, setTeams);
    sendRequest(configForPositions, setPositions);
    sendRequest(configForBrands, setBrands);
    sendRequest(configForCpus, setCpus);
  }, []);

  return (
    teams &&
    positions &&
    brands &&
    cpus && (
      <div className={classes.page}>
        <div className={classes.back}>
          <img src={backButton} onClick={backBtnClickHandler} />
        </div>
        <div onClick={backBtnClickHandler} className={classes.backForPhone}>
          <img src={backButtonForPhone} onClick={backBtnClickHandler} />
        </div>
        <div className={classes.main}>
          <div className={classes.chooseForm}>
            <div
              onClick={backPageClickHandler}
              className={page === "employee" ? classes.active : classes.none}
            >
              <span>თანამშრომლის ინფო</span>
            </div>
            <div
              onClick={nextPageClickHandler}
              className={page === "leptop" ? classes.active : classes.none}
            >
              <span>ლეპტოპის მახასიათებლები</span>
            </div>
          </div>
          <div className={classes.mainForm}>
            {page === "employee" && (
              <EmployeeForm
                changePage={setPage}
                positions={positions}
                teams={teams}
              />
            )}
            {page === "leptop" && (
              <LeptopForm
                setPage={setPage}
                brands={brands}
                cpus={cpus}
                changePage={setPage}
              />
            )}
          </div>
          <div>
            <img src={logo} />
          </div>
        </div>
      </div>
    )
  );
}

export default AddRecord;
