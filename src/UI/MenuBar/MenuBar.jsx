import React, { useEffect, useState } from 'react'
import classes from "./MenyBar.module.css";
import { Logo } from '../Logo/Logo';
import course from "../../assets/Bookmark.png";
import profile from "../../assets/profile.png"
import messages from "../../assets/messages.png"
import settings from "../../assets/settings.png"
import { useLocation, useNavigate } from 'react-router-dom';
import prev from "../../assets/previows.png";
export const MenuBar = ({menuBar}) => {
  const [sections, setSections] = useState([
    {text: "courses", img: course, isActive: false, path: "/main/courses"},
    {text: "my profile", img: profile, isActive: true, path: "/main/profile"},
    {text: "messages", img: messages, isActive: false, path: "/main/messages"},
    {text: "settings", img: settings, isActive: false, path: "/main/settings"}
  ]);
  const navigate = useNavigate();
  const clickSections = (path) =>{
      const arr = sections.filter(s =>{
        if(s.path === path){
          s.isActive = true;
        }else{
          s.isActive = false;
        }
        return s;
      })
      navigate(path);
      setSections(arr);
  }
  const location = useLocation();

  useEffect(() => {
    const updatedSections = sections.map((section) => ({
      ...section,
      isActive: section.path === location.pathname,
    }));
    setSections(updatedSections);
  }, [location.pathname]);
  return (
    <div className={classes.MenuBar_hidden}>
        <div className={`${classes.MenuBar} ${menuBar.menuBar?classes.move:""}`}>
            <div className={classes.MenuBar_inner}>
              <div className="" onClick={() =>menuBar.setMenuBar(!menuBar.menuBar)}><Logo/></div>
                <div className={classes.section_list}>
                  {sections.map(section =>
                    <div className={ `${classes.section_item} ${section.isActive?classes.isActive:""}`} onClick={() => clickSections(section.path)}>
                      <img src={section.img} className={classes.section_img}/> 
                      <div className={classes.section_text}>{section.text}</div>
                    </div>

                  )}
                </div>
            </div>
        </div>
    </div>
   
  )
}
