import React from "react";
import classes from "./Input.module.css";
//forwardRef for using ref in a custom component input
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

// the {...props.input} instead of id={props.input.id} type={props.input.type}
