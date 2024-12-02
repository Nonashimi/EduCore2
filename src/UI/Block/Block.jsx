import React from 'react'
import classes from "./Block.module.css"
export const Block = (props) => {
  return (
    <div className={classes.block} {...props}></div>
  )
}
