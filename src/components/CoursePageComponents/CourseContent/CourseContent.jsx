import React from 'react'
import classes from "./content.module.css"
export const CourseContent = () => {
  return (
    <div className={classes.course_content}>
  <h2>Course Content for The Professional Art Masterclass</h2>
  <div className={classes.modules_wrapper}>
    <div className={classes.module}>
      <h3>Module 1: Foundations of Advanced Art</h3>
      <ul>
        <li>
          <a href="#">Understanding Art Styles and Movements</a>
        </li>
        <li>
          <a href="#">Mastering Proportions, Perspective, and Anatomy</a>
        </li>
        <li>
          <a href="#">Exploring Mediums: Traditional vs. Digital</a>
        </li>
      </ul>
    </div>
    <div className={classes.module}>
      <h3>Module 2: Color Theory and Application</h3>
      <ul>
        <li>
          <a href="#">Advanced Color Harmony and Psychology</a>
        </li>
        <li>
          <a href="#">Mixing Techniques for Vibrant and Subtle Tones</a>
        </li>
        <li>
          <a href="#">Light, Shadow, and Depth: Creating Realism</a>
        </li>
      </ul>
    </div>
    <div className={classes.module}>
      <h3>Module 3: Composition and Design</h3>
      <ul>
        <li>
          <a href="#">The Rule of Thirds and Beyond: Designing with Impact</a>
        </li>
        <li>
          <a href="#">Dynamic Layouts and Balancing Elements</a>
        </li>
        <li>
          <a href="#">Storytelling Through Composition</a>
        </li>
      </ul>
    </div>
    <div className={classes.module}>
      <h3>Module 4: Developing Your Unique Style</h3>
      <ul>
        <li>
          <a href="#">Identifying Influences and Building Personal Voice</a>
        </li>
        <li>
          <a href="#">Experimenting with Techniques and Mediums</a>
        </li>
        <li>
          <a href="#">Creating a Consistent Body of Work</a>
        </li>
      </ul>
    </div>
    <div className={classes.module}>
      <h3>Module 5: Tools and Techniques</h3>
      <ul>
        <li>Traditional Tools: Brushes, Pencils, and Paints</li>
        <li>Digital Tools: Software Tutorials (Photoshop, Procreate, etc.)</li>
        <li>Combining Traditional and Digital Media</li>
      </ul>
    </div>
    <div className={classes.module}>
      <h3>Module 6: Conceptualizing and Executing Art Projects</h3>
      <ul>
        <li>Brainstorming and Sketching Ideas</li>
        <li>Planning and Executing a Cohesive Series</li>
        <li>Overcoming Creative Blocks</li>
      </ul>
    </div>
    <div className={classes.module}>
      <h3>Module 7: Portfolio Development</h3>
      <ul>
        <li>Selecting and Presenting Your Best Work</li>
        <li>Crafting a Portfolio for Galleries, Freelance, or Clients</li>
        <li>Photographing and Digitizing Your Art</li>
      </ul>
    </div>
    <div className={classes.module}>
      <h3>Module 8: Professional Skills for Artists</h3>
      <ul>
        <li>Navigating the Art Market: Pricing and Selling</li>
        <li>Marketing Yourself: Social Media, Networking, and Branding</li>
        <li>Managing Commissions and Client Relationships</li>
      </ul>
    </div>
  </div>
</div>

  )
}
