import React from 'react'
import { CiSearch,CiUser,CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";




const Sidenavbar = () => {
  return (
    <>
     <div className="Sidenavbar md:hidden">
      <nav>
        <div className="container">
          <div className='flex justify-between items-center h-25'>
            <div className='flex'>
              {/* Vite serves files from `public/` at the site root */}
              <a href="/">
                <img src="/public/images/favicon.png" alt="Nexton logo" />
              </a>
            </div>
            <div className='flex items-center w-fit bg-GrayBackground px-3 py-1 rounded-2xl '>
                <CiSearch/>
                <input type="text" placeholder='Search in products...'/>
            </div>
            <div className='flex items-center gap-2'>
                <RxHamburgerMenu/>
                <CiUser/>
                <CiShoppingCart/>
            </div>
          </div>
        </div>
      </nav>
     </div>

    </>
  )
}

export default Sidenavbar