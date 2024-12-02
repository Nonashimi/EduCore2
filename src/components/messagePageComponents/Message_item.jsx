import React from 'react'
import classes from "./message.module.css"
import { store } from '../../redux/store/store'
import { clickBtn } from '../../redux/slice/messageSlice'
import triangle from "../../assets/triangle.png"
export default function Message_item({message}) {
  return (
    <div className={classes.message_item}>
                            <div className={classes.message_head}>
                                <div className={classes.message_item_title}>
                                    {message.name}
                                </div>
                                <div className={`${classes.message_btn} ${message.isOpen?classes.message_btn_open:""}`} onClick={() => store.dispatch(clickBtn({id: message.id}))}>
                                    <img src={triangle} alt="" />
                                </div>
                            </div>
                            <div className={`${classes.message_text} ${message.isOpen?"":classes.message_text_hide}`}>
                                    {message.text}
                            </div>
                    </div>
  )
}
