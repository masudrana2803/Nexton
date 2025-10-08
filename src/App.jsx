import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Navbar from './components/Navbar'
import Sidenavbar from './components/Sidenavbar'

const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LayoutOne/>}>
  <Route />

  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
