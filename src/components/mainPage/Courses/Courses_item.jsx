import React from 'react'
import classes from "./courses.module.css";
import { useNavigate } from 'react-router-dom';
export const Courses_item = ({course_title, course_img, level, author}) => {
  const navigate = useNavigate();
  const pathTitle = course_title.replace(/ /g, "_"); 
  return (
    <div className={classes.course_item} onClick={() => navigate(`${pathTitle}`)}>
      <div className={classes.course_item_img}>
        <img src={course_img} alt="" />
      </div>
      <div className={classes.course_item_data}>
        <div className={classes.course_item_title}>
            <div className={classes.course_item_t_text}>
              {course_title}
            </div>
            <div className={classes.course_item_author}>
                <img src={course_img} alt="" />
                <div className="">{author}</div>
            </div>
        </div>
        <div className={classes.course_item_level}>
          <div className={classes.course_item_level_title}>
            Design & Creativity
          </div>
          <div className={classes.course_item_level_l}>
            {level}
          </div>
        </div>
      </div>
    </div>
  )
}
