import React from 'react'
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom"
import {useMemo} from "react"
import {useSelector} from "react-redux"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {createTheme} from "@mui/material/styles"
import {themeSettings} from "./theme"
import LoginPage from '@/scenes/loginPage/LoginPage'
import HomePage from '@/scenes/homePage/HomePage'
import ProfilePage from '@/scenes/profilePage/ProfilePage'


const App = () => {
  const mode=useSelector((state)=>state.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  return (
    <>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/profile/:userId' element={<ProfilePage/>} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App