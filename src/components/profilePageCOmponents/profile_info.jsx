import React from 'react'
import { LabelValue } from '../../UI/LabelValue/LabelValue'
import classes from "./profile.module.css"
import prof_img from "../../assets/prof_img.png";

export const Profile_info = () => {
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
  )
}
