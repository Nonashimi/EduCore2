import React from 'react'
import classes from "./NavList.module.css"
export const NavList = ({arr}) => {
  return (
    <nav className={classes.nav}>
        {arr.map(a =>
             <li className={classes.nav_li}>{a}</li>
        )}
    </nav>
  )
}
