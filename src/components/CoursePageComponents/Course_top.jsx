import React from 'react'
import classes from "./Course.module.css";
import MyButton from '../../UI/MyButton/MyButton';
import fon from "../../assets/fon.png";
export const Course_top = () => {
  return (
    <div className={classes.course_info}>
                    <div className={classes.course_info_inner}>
                        <div className={classes.course_title}>The Professional Art Masterclass</div>
                            <div className={classes.course_text}>Unlock your creative potential with this advanced course designed for aspiring artists and professionals. Learn expert techniques, refine your artistic style, and master the tools needed to excel in the art world. Perfect for those ready to elevate their craft to the next level!</div>
                            <div className={classes.course_bottom}>
                                <div className={classes.course_bottom_info}>
                                    <div className={classes.course_author}>Nico Angelo</div>
                                    <div className={classes.course_level}>Intermediate</div>
                                </div>
                                <MyButton>Enroll</MyButton>
                            </div>
                    </div>
                    <img src={fon} alt="" />
                </div>
  )
}
