import React, { useMemo } from 'react'
import { Courses_item } from './Courses_item'
import classes from "./courses.module.css"
import { Course_pagination } from '../../../UI/Course_Pagination/Course_pagination';
import course_img from "../../../assets/Thumbnail.png";
import { usePagination } from '../../../hooks/usePagination';
import { useItems } from '../../../hooks/useItems';
export const Courses_list = () => {
  const courses = [
    { course_title: "Course Title 1", author: "Author 1", level: "Beginner", img: course_img },
    { course_title: "Course Title 2", author: "Author 2", level: "Intermediate", img: course_img },
    { course_title: "Course Title 3", author: "Author 3", level: "Advanced", img: course_img },
    { course_title: "Course Title 4", author: "Author 4", level: "Beginner", img: course_img },
    { course_title: "Course Title 5", author: "Author 5", level: "Intermediate", img: course_img },
    { course_title: "Course Title 6", author: "Author 6", level: "Advanced", img: course_img },
    { course_title: "Course Title 7", author: "Author 7", level: "Beginner", img: course_img },
    { course_title: "Course Title 8", author: "Author 8", level: "Intermediate", img: course_img },
    { course_title: "Course Title 9", author: "Author 9", level: "Advanced", img: course_img },
    { course_title: "Course Title 10", author: "Author 10", level: "Beginner", img: course_img },
    { course_title: "Course Title 11", author: "Author 11", level: "Intermediate", img: course_img },
    { course_title: "Course Title 12", author: "Author 12", level: "Advanced", img: course_img },
    { course_title: "Course Title 13", author: "Author 13", level: "Beginner", img: course_img },
    { course_title: "Course Title 14", author: "Author 14", level: "Intermediate", img: course_img },
    { course_title: "Course Title 15", author: "Author 15", level: "Advanced", img: course_img },
    { course_title: "Course Title 16", author: "Author 16", level: "Beginner", img: course_img },
  ];
  const number = 8;
  const {allPage, thisPage, clickNext, clickPrev} = usePagination(courses, number);
  const sortedCourses = useItems(thisPage, number, courses);
  return (
    <div className="">
      <div className={classes.courses_list}>
            {sortedCourses.map(course =>
              <Courses_item course_title = {course.course_title} author = {course.author} level = {course.level} course_img = {course.img}/>
            )}
          </div>
          <div className={classes.pagination_sec}>
          <Course_pagination allPage = {allPage} clickNext = {clickNext} clickPrev = {clickPrev} thisPage={thisPage}/>
        </div>
    </div>
  )
}
