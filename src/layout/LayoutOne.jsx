import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/home'
import { Outlet } from 'react-router'
import Sidenavbar from '../components/Sidenavbar'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
        <Sidenavbar/>
        <Home/>
        <Outlet/>

    </>
  )
}

export default LayoutOne