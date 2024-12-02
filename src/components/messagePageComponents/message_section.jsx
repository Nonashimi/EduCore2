import React, { useState } from 'react'
import classes from "./message.module.css"
import { NavList } from '../../UI/NavList/NavList'
import { Courses_top } from '../mainPage/Courses/CoursesTop/Courses_top'
import triangle from "../../assets/triangle.png"
import { useSelector } from 'react-redux'
import { store } from '../../redux/store/store'
import { clickBtn } from '../../redux/slice/messageSlice'
import { useItems } from '../../hooks/useItems'
import { usePagination } from '../../hooks/usePagination'
import { Course_pagination } from '../../UI/Course_Pagination/Course_pagination'
import { Message_list } from './Message_list'
export const Message_section = () => {
    const sections = [
        "all",
        "today",
        "this week",
        "this month"
    ]

    const messages = useSelector((state) => state.messages.messages);
    const {allPage, thisPage, clickNext, clickPrev} = usePagination(messages, 5);
    const arr = useItems(thisPage, 5, messages);
  return (
    <div className="">
        <div className={classes.message_inner}>
           <Courses_top title = "All notifications" arr = {sections}/>
            <Message_list arr = {arr}/>
            <div className={classes.pagination_sec}>
                <Course_pagination clickNext={clickNext} clickPrev={clickPrev} allPage={allPage} thisPage={thisPage}/>
            </div>
        </div>
    </div>
  )
}
