import React from "react";
import classes from "./LaptopInformation.module.css";
function LaptopInformation(props) {
  console.log(props);
  const brand = props.brands.filter(
    (data) => data.id === props.laptopInfo.brand_id
  );
  console.log(brand[0]["name"], "hm");
  return (
    <div className={classes.laptopInformation}>
      <div className={classes.info}>
        <div className={classes.detail}>
          <span className={classes.key}>ლეპტოპის სახელი:</span>
          <span>{props.laptopInfo.name}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>ლეპტოპის ბრენდი:</span>
          <span>{brand[0]["name"]}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>RAM:</span>
          <span>{props.laptopInfo.ram}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>მეხსიერების ტიპი:</span>
          <span>{props.laptopInfo.hard_drive_type}</span>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.detail}>
          <span className={classes.key}>CPU:</span>
          <span>{props.laptopInfo.cpu.name}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.key}>CPU-ს ბირთვი:</span>
          <span>{props.laptopInfo.cpu.cores}</span>
        </div>

        <div className={classes.detail}>
          <span className={classes.key}>CPU-ს ნაკადი:</span>
          <span>{props.laptopInfo.cpu.threads}</span>
        </div>
      </div>
    </div>
  );
}

export default LaptopInformation;
