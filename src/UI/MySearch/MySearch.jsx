import React from 'react'
import search from "../../assets/Search.png";
import classes from "./MySearch.module.css";
export const MySearch = (props) => {
  return (
    <div className={classes.mySearch}>
        <input {...props}/>
        <img src={search} alt="" />
    </div>
  )
}
