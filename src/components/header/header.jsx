import React from 'react'
import classes from "./header.module.css";
import { MySearch } from '../../UI/MySearch/MySearch';
import MyButton from '../../UI/MyButton/MyButton';
import menu from "../../assets/menu.png";
import { ProfileIcon } from '../../UI/ProfileIcon/ProfileIcon';
export const Header = ({menuBar}) => {
  return (
    <header className={classes.header}>
      <img src={menu} className = {classes.menubar} onClick={() => menuBar.setMenuBar(!menuBar.menuBar)} alt="" />
        <div className={classes.header_inner}>
            <MySearch placeholder = "What you want to learn?"/>
            <ProfileIcon/>
            {/* <MyButton>Sign In</MyButton> */}
        </div>
    </header>
  )
}
