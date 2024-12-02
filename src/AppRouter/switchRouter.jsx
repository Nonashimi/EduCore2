import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Autentification from '../pages/Autentification'
import { MainPage } from '../pages/MainPage'

export const SwitchRouter = () => {
  return (
    <Routes>
        <Route path = "/main/*" element = {<MainPage/>}/>
        <Route path='/authentification' element = {<Autentification/>}/>
    </Routes>
  )
}
