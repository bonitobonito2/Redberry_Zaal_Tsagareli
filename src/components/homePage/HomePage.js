import React, { useEffect } from "react";
import classes from "./HomePage.module.css";
import mainPageImage from '../../images/mainPageImage.png'
import ActionButtons from "./actions/ActionButtons";
import pictureForIphone from '../../images/mainPageImageForIphone.png'
import reddarbieLogo from '../../images/redberryLogo.png'
function HomePage() {
  useEffect(()=>{
    localStorage.clear()
    localStorage.setItem('positionError',false)
  },[])
  return (
    <div className={classes.mainPage}>
      <div className={classes.logo}>
        <img  alt="" src={reddarbieLogo}  />
      </div>
      <div className={classes.picture}>
        <img alt="" src = {mainPageImage} />
      </div>
      <div className={classes.pictureForIphone}>
        <img alt="" src = {pictureForIphone} />
      </div>
      <div className={classes.actions}>
        <ActionButtons />
      </div>
    </div>
  );
}

export default HomePage;
