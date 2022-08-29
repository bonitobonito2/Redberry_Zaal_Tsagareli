import React, { Fragment } from "react";
import Select from "react-select";
import classes from "./LeptopForm.module.css";
import Input from "../../UI/Input";
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
          <Input
            name={"ლეპტოპის სახელი"}
            requirments={"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
          />
        </div>
        <div className={classes.brand}>
          <Select placeholder="ლეპტოპის ბრენდი" options={optionsForBrand} />
        </div>
      </div>

      <div className={classes.cpu}>
        <div className={classes.cpuSelector}>
          <Select placeholder="CPU" options={optionsForCpu} />
        </div>
        <div className={classes.inputDivForCpu}>
          <Input name={"CPU-ს ბირთვი"} requirments={"მხოლოდ ციფრები"} />
        </div>
        <div className={classes.inputDivForCpu}>
          <Input name={"CPU-ს ნაკადი"} requirments={"მხოლოდ ციფრები"} />
        </div>
      </div>
      <div className={classes.cpu}>
        <div className={classes.inputDiv}>
          <Input name="ლეპტოპის RAM (GB)" requirments="მხოლოდ ციფრები" />
        </div>
        <div className={classes.radios}>
          <span>მეხსიერების ტიპი</span>
          <div>
            <input type="radio" value="SSD" name="SSD" /> Male
            <input type="radio" value="HDD" name="HDD" /> Male
          </div>
        </div>
      </div>
      <div className={classes.border} />
      <div className={classes.leptopPersonalInformation}>
        <div className={classes.inputDiv}>
          <Input
            name="შეძენის რიცხვი (არჩევითი)"
            placeholder="დდ / თთ / წწწწ"
          />
        </div>
        <div className={classes.inputDiv}>
          <Input
            name="ლეპტოპის ფასი, ₾"
            placeholder="0000"
            requirments="მხოლოდ ციფრები"
          /> 
        </div>
      </div>
      <div>
        <div className={classes.leptopCondition}>
          <span>მეხსიერების ტიპი</span>
          <div>
            <input type="radio" value="SSD" name="SSD" /> Male
            <input type="radio" value="HDD" name="HDD" /> Male
          </div>
        </div>
      </div>

      <div className={classes.actions}>
        <button
          className={classes.back}
          onClick={() => props.changePage("employee")}
        >
          უკან
        </button>
        <button className={classes.save}>დამატება</button>
      </div>
    </Fragment>
  );
}

export default LeptopForm;
