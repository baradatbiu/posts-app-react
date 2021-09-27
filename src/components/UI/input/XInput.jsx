import React from 'react';
import classes from "./XInput.module.css";

function XInput(props) {
  return (
    <input {...props} className={classes.input} />
  );
}

export default XInput;