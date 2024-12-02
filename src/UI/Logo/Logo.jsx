import React from 'react'
import classes from "./Logo.module.css"
import logo from "../../assets/logo.png"
export const Logo = () => {
  return (
    <div className={classes.footer_logo}>
        <img src={logo} alt="" />
        <div className="">EduCore</div>
    </div>
  )
}
