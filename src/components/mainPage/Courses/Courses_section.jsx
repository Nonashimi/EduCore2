import React from 'react'
import { Courses_top } from './CoursesTop/Courses_top'
import classes from "./courses.module.css"
import { Courses_item } from './Courses_item'
import { Courses_list } from './Courses_list'
export const Courses_section = () => {
  const arr = [
    "all",
    "area",
    "level",
    "teacher"
  ];
  return (
    <div className={classes.courses_section}>
        <div className={classes.courses_inner}>
            <Courses_top arr = {arr} title = "TOP Courses"/>
            <Courses_list/>
        </div>
    </div>
  )
}
