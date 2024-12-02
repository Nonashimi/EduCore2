import React from 'react'
import classes from "./ProfileIcon.module.css"
import prof_img from "../../assets/ProfileIcon.png"
import notif_img from "../../assets/notif.png"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const ProfileIcon = () => {
    const messages = useSelector((state) => state.messages.messages);
    const navigate = useNavigate();
    return (
    <div className={classes.profileIcon}>
        <div className={classes.notification} onClick={() => navigate("/main/messages")}>
            <div className={classes.notification_number}>{messages.length}</div>
            <img src={notif_img} className={classes.notification_img} alt="" />
            <div className={classes.notif_messages}>
                {messages.map(message => 
                    <div className={classes.message_text}>{message.text}</div>
                )}
            </div>
        </div>
        <div className={classes.profile_img} onClick={() => navigate("/main/profile")}>
            <img src={prof_img} alt="" />
        </div>
    </div>
  )
}
