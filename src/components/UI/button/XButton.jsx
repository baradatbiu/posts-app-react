import React from 'react';
import classes from "./XButton.module.css";

function XButton({ children, ...props }) {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
}

export default XButton;