import React from "react";
import classes from "./HomePage.module.css";
import mainPageImage from '../../images/mainPageImage.png'
import ActionButtons from "./actions/ActionButtons";
import pictureForIphone from '../../images/mainPageImageForIphone.png'
import reddarbieLogo from '../../images/redberryLogo.png'
function homePage() {
  return (
    <div className={classes.mainPage}>
      <div className={classes.logo}>
        <img src={reddarbieLogo}  />
      </div>
      <div className={classes.picture}>
        <img src = {mainPageImage} />
      </div>
      <div className={classes.pictureForIphone}>
        <img src = {pictureForIphone} />
      </div>
      <div className={classes.actions}>
        <ActionButtons />
      </div>
    </div>
  );
}

export default homePage;
