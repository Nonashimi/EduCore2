import React from 'react'
import classes from "./desc.module.css"
export const Course_description = () => {
  return (
    <div className={classes.course_description}>
    <h2>Course Description</h2>
    <p>
      Unleash your creativity and elevate your artistic skills with The Professional Art Masterclass. This comprehensive course is tailored for aspiring artists and professionals looking to refine their craft and explore advanced techniques.
    </p>
    <h3>What You Will Learn in The Professional Art Masterclass:</h3>
    <div className={classes.course_content}>
      <div className={classes.content_course}>
        <h4>Advanced Artistic Techniques</h4>
        <ul>
          <li>Master advanced drawing, painting, and digital art methods.</li>
          <li>Explore various mediums, from traditional tools to modern software.</li>
        </ul>
      </div>
      <div className={classes.content_section}>
        <h4>Color Theory and Composition</h4>
        <ul>
          <li>Deepen your understanding of color harmony and its impact.</li>
          <li>Create visually compelling compositions with professional techniques.</li>
        </ul>
      </div>
      <div className={classes.content_section}>
        <h4>Concept Development</h4>
        <ul>
          <li>Learn to turn ideas into powerful artistic narratives.</li>
          <li>Build cohesive projects that reflect your personal vision and style.</li>
        </ul>
      </div>
      <div className={classes.content_section}>
        <h4>Portfolio Building</h4>
        <ul>
          <li>Create a standout portfolio tailored to your artistic goals.</li>
          <li>Gain insights on presenting your work to galleries, clients, or employers.</li>
        </ul>
      </div>
    </div>
  </div>
  
  )
}
