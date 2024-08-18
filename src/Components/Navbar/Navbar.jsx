import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='fixed w-full  bg-white_bg'>
      <nav className='max-w-[1320px] mx-auto flex justify-between items-center py-4'>
        <Link to='/' className='flex items-center gap-5'>
          <img className='w-16' src="./favicon.png" alt="logo" />
          <h2 className='text-xl'>Trendify</h2>
        </Link>

        <div className='flex items-center gap-5'>
          <button className='mr-5'>
            <IoCartOutline className='text-3xl' />
          </button>

          <Link to='login'>
            <PrimaryButton text="Login" style="border-2 border-black text-black rounded-[40px] py-4 px-12" />
          </Link>
          <Link to='register'>
            <PrimaryButton text="Register" style="bg-primary text-white rounded-[40px] py-4 px-12" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar