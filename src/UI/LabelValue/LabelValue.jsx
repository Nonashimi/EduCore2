import React from 'react'
import classes from "./LabelValue.module.css"
export const LabelValue = ({label, value}) => {
  return (
    <div className={classes.label_value}>
        <strong>{label}:</strong>
        <div className="">{value}</div>
    </div>
  )
}
