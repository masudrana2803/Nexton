import React from 'react'
import { CiSearch,CiUser,CiShoppingCart } from "react-icons/ci";
import logo from '/public/images/logo.png'
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <div className="navrow hidden md:block">
      <nav>
        <div className="container">
          <div className='flex justify-between items-center h-25'>
            <div className='flex'>
              {/* Vite serves files from `public/` at the site root */}
                <Link to={'/'}>
                <img src={logo} alt="Nexton logo" />
                </Link>


            </div>
            <div className='flex items-center w-fit bg-GrayBackground px-3 py-1 rounded-2xl '>
                <CiSearch/>
                <input type="text" placeholder='Search in products...'/>
            </div>
            <div className='flex items-center gap-2'>
                <CiUser/>
                <CiShoppingCart/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar