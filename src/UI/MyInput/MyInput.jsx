import React from 'react'
import classes from "./MyInput.module.css";
const MyInput = (props) => {
  return (
    <div>
        <input type="text" {...props} className={classes.my_input}/>
    </div>
  )
}

export default MyInput