import React from 'react'
import classes from "./profile.module.css"
import MyButton from '../../UI/MyButton/MyButton'
export const Profile_recent_course = () => {
    const courses = [
        {
            name: "The Professional Art Masterclass",
            numberOfStudents: 150,
            status: "completed",
            title: "Design & Creativity",
            level: "hard"
        },
        {
            name: "The Professional Art Masterclass",
            numberOfStudents: 150,
            status: "completed",
            title: "Design & Creativity",
            level: "hard"
        },
        {
            name: "The Professional Art Masterclass",
            numberOfStudents: 150,
            status: "completed",
            title: "Design & Creativity",
            level: "hard"
        }
    ]
  return (
    <div className={classes.profile_recent}>
        <div className={classes.title}>
            Recent Courses 
        </div>
        <div className={classes.recent_courses}>
            {courses.map(c =>
                <div class={classes.course_card}>
                <div class={classes.course_info}>
                  <div class={classes.course_header}>
                    <h3>{c.name}</h3>
                    <p><strong>Number of students: {c.numberOfStudents}</strong></p>
                  </div>
                  <div class={classes.course_details}>
                    <span>{c.title}</span>
                    <span>{c.level}</span>
                  </div>
                </div>
                <div class={classes.course_status}>
                    <MyButton>{c.status}</MyButton>
                </div>
              </div>
              
            )}
        </div>
    </div>
  )
}
