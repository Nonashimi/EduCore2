import React from 'react'
import classes from "./COurses_Top.module.css";
import { NavList } from '../../../../UI/NavList/NavList';
export const Courses_top = ({title, arr}) => {
  
  return (
    <div className={classes.coursesTop}>
        <div className={classes.Courses_top}>
            {title}
        </div>
        <NavList arr = {arr}/>
    </div>
  )
}
