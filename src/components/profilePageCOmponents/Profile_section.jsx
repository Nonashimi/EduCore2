import React from 'react'
import classes from "./profile.module.css";
import { LabelValue } from '../../UI/LabelValue/LabelValue';
import { Block } from '../../UI/Block/Block';
import { Profile_info } from './profile_info';
import { Profile_upcoming } from './Profile_upcoming';
import { Profile_recent_course } from './Profile_recent_course';
export const Profile_section = () => {
   
  return (
    <div className={classes.profile_inner}>
        <div className={classes.profile_grid}>
            <Block>
                <Profile_info/>
            </Block>
            <Block>
               <Profile_upcoming/>
            </Block>
            <div className={classes.last}>
                <Block>
                    <Profile_recent_course/>
                </Block>
            </div>
        </div>
    </div>
  )
}
