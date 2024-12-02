import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Courses_section } from '../components/mainPage/Courses/Courses_section'
import { ProfilePage } from '../pages/ProfilePage'
import { MessagesPage } from '../pages/MessagesPage'
import { CoursePage } from '../pages/CoursePage'

export const MainSwitchRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="courses" replace />} />
        <Route path = "courses" element = {<Courses_section/>}/>
        <Route path = "profile" element = {<ProfilePage/>}/>
        <Route path = "messages" element = {<MessagesPage/>}/>
        <Route path = "courses/:id" element = {<CoursePage/>}/>
    </Routes>

  )
}
