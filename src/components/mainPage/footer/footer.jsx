import React from 'react'
import classes from "./footer.module.css";
import { Logo } from '../../../UI/Logo/Logo';
export const Footer = () => {
  return (
    <footer className={classes.footer}>
            <div className={classes.footer_inner}>
                <div className={classes.footer_text}>
                We are a global platform for students and teachers, bringing people together for collaborative learning and growth. Join us and gain access to endless opportunities for knowledge.
                </div>
                <div className={classes.footer_info}>
                   <Logo/>
                    <div className={classes.footer_city}>
                        <div className="">Almaty, Kazakhystan</div>
                        <div className="">2024</div>
                    </div>
                </div>
            </div>
    </footer>
  )
}
