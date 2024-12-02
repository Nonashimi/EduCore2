import React from 'react'
import classes from "./message.module.css"
import triangle from "../../assets/triangle.png";
import { store } from '../../redux/store/store';
import { clickBtn } from '../../redux/slice/messageSlice';
import Message_item from './Message_item';
export const Message_list = ({arr}) => {
  return (
        <div className={classes.message_list}>
                    {arr.map(message =>
                        <Message_item message={message}/>
                    )}
        </div>
    )
}
