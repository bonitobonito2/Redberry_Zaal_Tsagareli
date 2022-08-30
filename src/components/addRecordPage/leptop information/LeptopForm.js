import React, { Fragment, useEffect, useState } from "react";
import Select from "react-select";
import UseValidation from "../../../Hooks/useValidation";
import classes from "./LeptopForm.module.css";
import Input from "../../UI/Input";
function LeptopForm(props) {
  const [isFormValid, setFormValid] = useState(false);
  const {
    inputValue: inputValueOfleptopName,
    checkIfInputIsValid: leptopNameCheker,
    isValid: leptopNameIsValid,
    isTouched: leptopNameIsTouched,
    touchHandler: leptopNameTouchHandler,
    errorText: leptopNameError,
  } = UseValidation("leptopName");
  const {
    inputValue: inputValueOfCpuBirvi,
    checkIfInputIsValid: CpuBirviCheker,
    isValid: CpuBirviIsValid,
    isTouched: CpuBirviIsTouched,
    touchHandler: CpuBirviTouchHandler,
    errorText: CpuBirviError,
  } = UseValidation("onlyNumbers");

  const {
    inputValue: inputValueOfCpuNakadi,
    checkIfInputIsValid: CpuNakadiCheker,
    isValid: CpuNakadiIsValid,
    isTouched: CpuNakadiIsTouched,
    touchHandler: CpuNakadiTouchHandler,
    errorText: CpuNakadiError,
  } = UseValidation("onlyNumbers");

  const {
    inputValue: inputValueOfRam,
    checkIfInputIsValid: RamCheker,
    isValid: RamIsValid,
    isTouched: RamIsTouched,
    touchHandler: RamTouchHandler,
    errorText: RamError,
  } = UseValidation("onlyNumbers");

  const {
    inputValue: inputValueOfCoast,
    checkIfInputIsValid: CoastCheker,
    isValid: CoastIsValid,
    isTouched: CoastIsTouched,
    touchHandler: CoastTouchHandler,
    errorText: CoastError,
  } = UseValidation("onlyNumbers");
  useEffect(() => {
    if (
      CoastIsValid &&
      RamIsValid &&
      CpuNakadiIsValid &&
      CpuBirviIsValid &&
      leptopNameIsValid
    ) {
      if (inputValueOfCpuBirvi.length !== 0) setFormValid(true);
      else setFormValid(false);
    }
  }, [
    CoastIsValid,
    RamIsValid,
    CpuNakadiIsValid,
    CpuBirviIsValid,
    leptopNameIsValid,
  ]);
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
            isValid={leptopNameIsValid}
            touchHandler={leptopNameTouchHandler}
            isTouched={leptopNameIsTouched}
            errorText={leptopNameError}
            value={inputValueOfleptopName}
            nameChaker={leptopNameCheker}
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
          <Input
            isValid={CpuBirviIsValid}
            touchHandler={CpuBirviTouchHandler}
            isTouched={CpuBirviIsTouched}
            errorText={CpuBirviError}
            value={inputValueOfCpuBirvi}
            nameChaker={CpuBirviCheker}
            name={"CPU-ს ბირთვი"}
            requirments={"მხოლოდ ციფრები"}
          />
        </div>
        <div className={classes.inputDivForCpu}>
          <Input
            isValid={CpuNakadiIsValid}
            touchHandler={CpuNakadiTouchHandler}
            isTouched={CpuNakadiIsTouched}
            errorText={CpuNakadiError}
            value={inputValueOfCpuNakadi}
            nameChaker={CpuNakadiCheker}
            name={"CPU-ს ნაკადი"}
            requirments={"მხოლოდ ციფრები"}
          />
        </div>
      </div>
      <div className={classes.cpu}>
        <div className={classes.inputDiv}>
          <Input
            isValid={RamIsValid}
            touchHandler={RamTouchHandler}
            isTouched={RamIsTouched}
            errorText={RamError}
            value={inputValueOfRam}
            nameChaker={RamCheker}
            name="ლეპტოპის RAM (GB)"
            requirments="მხოლოდ ციფრები"
          />
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
            isValid={CoastIsValid}
            touchHandler={CoastTouchHandler}
            isTouched={CoastIsTouched}
            errorText={CoastError}
            value={inputValueOfCoast}
            nameChaker={CoastCheker}
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
        <button
          disabled={!isFormValid}
          className={!isFormValid ? classes.disabled : classes.active}
        >
          დამატება
        </button>
      </div>
    </Fragment>
  );
}

export default LeptopForm;
