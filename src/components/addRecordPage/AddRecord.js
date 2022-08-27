import React, { useEffect, useState } from "react";
import useHttpHook from "../../Hooks/useHttpHook";
import classes from "./AddRecord.module.css";
import EmployeeInformation from "./employee information/EmployeeInformation";
function AddRecord() {
  const [sendRequest, isLoading, error] = useHttpHook();
  const [teams, setTeams] = useState();
  const [positions, setPositions] = useState();
  useEffect(() => {
    let configForTeam = {
      url: "https://pcfy.redberryinternship.ge/api/teams",
      type: "get",
    };
    let configForPositions = {
      url: "https://pcfy.redberryinternship.ge/api/positions",
      type: "get",
    };
    sendRequest(configForTeam, setTeams);
    sendRequest(configForPositions, setPositions);
  }, []);

  return (
    teams &&
    positions && (
      <div className={classes.page}>
        <div className={classes.mainForm}>
          <EmployeeInformation positions={positions} teams={teams} />
        </div>
      </div>
    )
  );
}

export default AddRecord;
