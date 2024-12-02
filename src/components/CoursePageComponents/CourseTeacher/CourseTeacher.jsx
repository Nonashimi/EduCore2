import React from 'react'
import classes from "./Courseteacher.module.css"
import prof_img from "../../../assets/prof_img.png";
import { LabelValue } from '../../../UI/LabelValue/LabelValue';

export const CourseTeacher = () => {
    const main_info = [
        { label: "Name", value: "Aruzhan" },
        { label: "Date of Birth", value: "01/01/2000" },
        { label: "City", value: "Almaty" },
        { label: "Email", value: "aruzhan@gmail.com" },
        { label: "Phone", value: "8773302222" },
      ];
    const pos_info = [
        { label: "Position", value: "Teacher of Mathematics and Statistics" },
        { label: "Work experience", value: "10+ years in teaching" }
    ];
  return (
    <div className="">
        <div className={classes.profile_info}>
            <div className={classes.profile_main}>
                <img src={prof_img} alt="" />
                <div className={classes.prof_main_info}>
                    {main_info.map(m =>
                        <LabelValue label={m.label} value={m.value}/>
                    )}
                </div>
            </div>
            <div className={classes.profile_pos}>
                {pos_info.map(m =>
                <LabelValue label={m.label} value={m.value}/>
                )}
            </div>
        </div>
        <div className={classes.teacher_texts}>
            <div className={classes.teacher_text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quam ex illo maxime, recusandae laboriosam error ut iure corrupti vitae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, omnis, quas quia quae, vero laboriosam nihil ducimus quasi ipsam consequatur animi quo voluptates. Aperiam ducimus fugiat voluptatum dolores earum vel quia necessitatibus dolorum reiciendis consectetur ea, natus suscipit, dignissimos magnam.
            </div>
            <div className={classes.teacher_text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quam ex illo maxime, recusandae laboriosam error ut iure corrupti vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatum cupiditate tempore debitis, distinctio quasi doloribus reiciendis rerum! Modi reiciendis, consequatur veniam repellendus quam id odit quasi nisi officiis nobis!

            </div>
        </div>
    </div>
        
  )
}
