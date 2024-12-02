import React from 'react'
import classes from "./Course.module.css"
import { useNavigate } from 'react-router-dom';
export const Course_path = ({path_arr}) => {
    const navigate = useNavigate();
  return (
    <div className={classes.router_path}>
                <div className="" onClick={() => navigate(-1)}>{path_arr[0]}</div> 
                <div className="">{`>`}</div> 
                <div className="">{path_arr[1]}</div>
            </div>
  )
}
