import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../UI/ImageUpload";
import Select from "react-select";
import postRequestHandler from "../../../helper/postRequestHandler";
import UseValidation from "../../../Hooks/useValidation";
import classes from "./LeptopForm.module.css";
import Input from "../../UI/Input";
function LeptopForm(props) {
  const date = useRef();
  const navigate = useNavigate();
  const [isFormValid, setFormValid] = useState(false);
  const [image, setImage] = useState();
  const [brandIsChoosen, setBrandIsChoosen] = useState(false);
  const [isImageSelected, setImageSelected] = useState(false);
  const [cpuIsChoosen, setCpuIsChoosen] = useState(false);
  const [leptopCondition, setLeptopCondition] = useState();
  const [memoryType, setMemoryType] = useState();

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
      leptopNameIsValid &&
      brandIsChoosen &&
      cpuIsChoosen &&
      isImageSelected &&
      memoryType &&
      leptopCondition
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
    brandIsChoosen,
    cpuIsChoosen,
    isImageSelected,
    memoryType,
    leptopCondition,
  ]);

  const leptopConditionHandler = (condition) => {
    localStorage.setItem("leptopCondition", condition);
    setLeptopCondition(condition);
  };
  const leptopMemoryHadnler = (memory) => {
    localStorage.setItem("memoryType", memory);
    setMemoryType(memory);
  };
  const handlerImageData = (image, selected) => {
    setImageSelected(selected);
    setImage(image);
  };
  const reqeuestSendHandler = () => {
    postRequestHandler({ image: image }, (data, error) => {
      if (error) {
        localStorage.setItem("positionError", true);
        props.setPage("employee");
      }
      if (!error) {
        localStorage.clear();
        navigate("/succses", { replace: true });
        return 0;
      }
    });
  };

  const optionsForCpu = props.cpus.map((data) => {
    return { value: data.name, label: data.name };
  });

  const optionsForBrand = props.brands.map((data) => {
    return { value: data.id, label: data.name };
  });

  const brandCHangeHandler = (selectedOption) => {
    localStorage.setItem("leptopBrandId", selectedOption.value);
    localStorage.setItem("leptopBrand", selectedOption.label);
    setBrandIsChoosen(true);
  };
  const cpuChanger = (selectedOption) => {
    localStorage.setItem("cpu", selectedOption.value);
    setCpuIsChoosen(true);
  };

  let brand = localStorage.getItem("leptopBrand");
  let brandId = localStorage.getItem("leptopBrandId");
  let cpu = localStorage.getItem("cpu");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    let condition = localStorage.getItem("leptopCondition");
    let memoryType = localStorage.getItem("memoryType");

    setLeptopCondition(condition);
    setMemoryType(memoryType);

    if (brand) setBrandIsChoosen(true);
    if (cpu) setCpuIsChoosen(true);
  }, []);

  return (
    <Fragment>
      <ImageUpload onInput={handlerImageData} />

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
            placeholder = 'HP'
          />
        </div>
        <div className={classes.brand}>
          {brand ? (
            <Select
              onChange={brandCHangeHandler}
              defaultValue={{ value: brandId, label: brand }}
              options={optionsForBrand}
            />
          ) : (
            <Select
              onChange={brandCHangeHandler}
              placeholder="ლეპტოპის ბრენდი"
              options={optionsForBrand}
            />
          )}
        </div>
      </div>

      <div className={classes.cpu}>
        <div className={classes.cpuSelector}>
          {cpu ? (
            <Select
              onChange={cpuChanger}
              defaultValue={{ value: cpu, label: cpu }}
              options={optionsForCpu}
            />
          ) : (
            <Select
              onChange={cpuChanger}
              placeholder="CPU"
              options={optionsForCpu}
            />
          )}
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
            placeholder = '14'
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
            placeholder = '365'
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
            placeholder = '16'
          />
        </div>
        <div className={classes.leptopCondition}>
          <span>მეხსიერების ტიპი</span>
          <div>
            <input
              onChange={() => leptopMemoryHadnler("SSD")}
              checked={memoryType === "SSD"}
              type="radio"
              value="SSD"
              name="SSD"
            />{" "}
            SSD
            <input
              onChange={() => leptopMemoryHadnler("HDD")}
              checked={memoryType === "HDD"}
              type="radio"
              value="HDD"
              name="HDD"
            />{" "}
            HDD
          </div>
        </div>
      </div>
      <div className={classes.border} />
      <div className={classes.leptopPersonalInformation}>
        <div className={classes.inputDiv}>
          <Input
            type="date"
            value={date}
            name="შეძენის რიცხვი (არჩევითი)"
            placeholder="დდ / თთ / წწწწ"
            required={false}
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
          <span>ლეპტოპის მდგომარეობა</span>
          <div>
            <input
              onChange={() => leptopConditionHandler("ახალი")}
              checked={leptopCondition === "ახალი"}
              type="radio"
              value="ახალი"
              name="ახალი"
            />{" "}
            ახალი
            <input
              onChange={() => leptopConditionHandler("მეორადი")}
              checked={leptopCondition === "მეორადი"}
              type="radio"
              value="მეორადი"
              name="მეორადი"
            />{" "}
            მეორადი
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
          onClick={reqeuestSendHandler}
        >
          დამატება
        </button>
      </div>
    </Fragment>
  );
}

export default LeptopForm;
