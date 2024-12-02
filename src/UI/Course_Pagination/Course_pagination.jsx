import React from 'react'
import classes from "./course_pagination.module.css";
import next from "../../assets/next.png";
import next_active from "../../assets/next_active.png";
export const Course_pagination = ({clickNext, clickPrev, allPage, thisPage}) => {
  return (
    <div className={classes.courses_pagination}>
        <img src={thisPage === 1?next:next_active} className={`${classes.course_pag_prev} ${thisPage === 1?classes.notActive:classes.course_pag_line}`} onClick={clickPrev} alt="" />
        <div className={classes.course_pagination_numbers}>
          {Array(allPage).fill(0).map((n, index)=> 
            <div className={`${classes.course_pagination_number} ${thisPage === (index + 1)?classes.course_pagination_number_active:""}`}>{index + 1}</div>
          )}
        </div>
        <img src={thisPage === allPage?next:next_active} className = {`${thisPage === allPage?classes.notActive:classes.course_pag_line}`} onClick={clickNext} alt="" />
      </div>
  )
}
