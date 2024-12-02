import React, { useState } from 'react'
import { Header } from '../components/header/header'
import { Courses_section } from '../components/mainPage/Courses/Courses_section'
import { Footer } from '../components/mainPage/footer/footer'
import { MenuBar } from '../UI/MenuBar/MenuBar'
import { MainSwitchRouter } from '../AppRouter/mainSwitchRouter'
import { GrayFon } from '../UI/GrayFon/GrayFon'
export const MainPage = () => {
    const [menuBar, setMenuBar] = useState(false);
  return (
    <div>
        <MenuBar  menuBar = {{menuBar, setMenuBar}}/>
        <Header menuBar = {{menuBar, setMenuBar}}/>
        <GrayFon>
          <MainSwitchRouter/>
        </GrayFon>
        <Footer/>
    </div>
  )
}
