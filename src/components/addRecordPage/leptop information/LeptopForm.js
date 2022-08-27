import React, { Fragment } from "react";
import Select from "react-select";
import classes from "./LeptopForm.module.css";
function LeptopForm(props) {
  console.log(props);
  const optionsForCpu = props.cpus.map((data) => {
    return { value: data.name, label: data.name };
  });

  const optionsForBrand = props.brands.map((data) => {
    return { value: data.name, label: data.name };
  });
  return (
    <Fragment>
      <div className={classes.chooseImage}>
        <span>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</span>
        <button>ატვირთე</button>
      </div>
      <div className={classes["leptopBrand_leptopName"]}>
        <div className={classes.inputDiv}>
          <span className={classes.title}>ლეპტოპის სახელი:</span>
          <input placeholder="ლეპტოპის სახელი" />
          <span className={classes.requirments}>
            {"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
          </span>
        </div>
        <div className={classes.brand}>
          <Select placeholder="ლეპტოპის ბრენდი" options={optionsForBrand} />
        </div>
      </div>

      <div className={classes.cpu}>
        <div className={classes.cpuSelector}>
          <Select placeholder="CPU" options={optionsForCpu} />
        </div>
        <div className={classes.inputDiv}>
          <span className={classes.title}>ლეპტოპის სახელი:</span>
          <input placeholder="ლეპტოპის სახელი" />
          <span className={classes.requirments}>
            {"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
          </span>
        </div>
        <div className={classes.inputDiv}>
          <span className={classes.title}>ლეპტოპის სახელი:</span>
          <input placeholder="ლეპტოპის სახელი" />
          <span className={classes.requirments}>
            {"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
          </span>
        </div>
      </div>

      <div className={classes.actions}>
        <button onClick={() => props.changePage("employee")}>უკან</button>
      </div>
    </Fragment>
  );
}

export default LeptopForm;
