import React, { Fragment } from 'react'
import classes from './ActionButtons.module.css'
function ActionButtons() {
  return (
    <Fragment>
        <button className={classes.button}>ჩანაწერის დამატება</button>
        <button className={classes.button}>ჩანაწერების სია</button>
    </Fragment>
  )
}

export default ActionButtons
