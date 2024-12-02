import React from 'react'
import classes from "./profile.module.css"
import { LabelValue } from '../../UI/LabelValue/LabelValue'
export const Profile_upcoming = () => {
    const tasks = [
        {name: "Group consultation",
         course: "Mastering DevOps: Automation",
         deadline: "25 Nov 2024, 5:00 PM"
        },
        {name: "Group consultation",
            course: "Mastering DevOps: Automation",
            deadline: "25 Nov 2024, 5:00 PM"
        }
    ]
  return (
        <div className={classes.profile_upComingTasks}>
            <div className={classes.title}>Upcoming Tasks and Events</div>
            <div className={classes.upcoming_tasks}>
                {tasks.map(t => 
                    <div className={classes.upcoming_task}>
                        <div className={classes.task_name}>{t.name}</div>
                        <LabelValue label={"course"} value={t.course}/>
                        <LabelValue label={"deadline"} value={t.deadline}/>
                    </div>
                )}
            </div>
        </div>
)
}
