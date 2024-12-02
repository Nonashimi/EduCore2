import React, { useMemo, useState } from 'react'
import classes from "./Course.module.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { Course_top } from './Course_top'
import { Course_path } from './Course_path'
import { CourseTeacher } from './CourseTeacher/CourseTeacher'
import { CourseContent } from './CourseContent/CourseContent'
import { Course_description } from './CourseDescription/Course_description'
export const Course_section = () => {
    const [sections, setSections] = useState([
        {section: "descryption", isOpen: false },
        {section:'Course Content', isOpen: true},
        {section: "Teacher", isOpen: false}
    ]);
    const path = useLocation();
    const path_arr = useMemo(() => {
        const arr = path.pathname.split("/").slice(2); // Skip first two segments
        if (arr[1]) arr[1] = arr[1].replace(/_/g, " "); // Replace underscores in second segment
        return arr;
    }, [path.pathname]);
    

    const handleSectionClick = (section) => {
        setSections(prevSections =>
            prevSections.map(s => ({
                ...s,
                isOpen: s.section === section,
            }))
        );
    };

    const sectionComponents = {
        "Teacher": <CourseTeacher />,
        "Course Content": <CourseContent />,
        "descryption": <Course_description />
    };

  return (
    <div>
        <div className={classes.course_inner}>
            <Course_path path_arr={path_arr}/>
            <div className={classes.course_block}>
                <Course_top/>
                <div className={classes.course_content}>
                    <div className={classes.course_content_section}>
                       {sections.map(section => 
                        <div onClick={() => handleSectionClick(section.section)} className={`${classes.section} ${section.isOpen?classes.section_active:""}`}>{section.section}</div>
                       )}
                    </div>
                    <div className={classes.course_container}>
                        {sections.map((section) => 
                            section.isOpen && 
                            React.cloneElement(sectionComponents[section.section], {
                                className: section.isOpen ? "" : classes.hide
                            })
                        )}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
