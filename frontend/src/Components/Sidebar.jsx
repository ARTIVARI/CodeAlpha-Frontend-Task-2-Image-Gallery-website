import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar=()=> {
  return (
    <div className='bg-black sm:h-screen h-auto flex flex-col justify-between'>
        <div >
          <div className=' hidden  sm:block'>
            <div className='p-4 flex flex-row gap-4 items-center'>
            <img className='w-10 h-10 hidden  sm:block' src='logo.png'></img>
            <h1 className='fkex items-center '>PixPortal</h1>
            </div>
          </div>
          <div>
            <div className='  hidden  sm:block'>
               <div className='h-44 flex justify-center'>
               <img className=' rounded-full border-4 p-2 border-purple-600  ' src='profile.png'></img>
               </div>
            </div>

            <div className=' hidden  sm:block '>
               <div className='flex justify-center'>
               <samp className='mt-4'>Hi' Arnava Tivari</samp>
               </div>
            </div>
            <div className='flex sm:flex-col flex-row justify-between sm:gap-3  p-4'>

            <Link to='/'>
              <button type='button' className='flex text-white   hover:bg-purple-800 rounded-lg text-sm px-5 py-2.5 text-start items-center gap-2 w-full'>
              <lord-icon
                  src="https://cdn.lordicon.com/wmwqvixz.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style={{width: '25px', height: '25px'}}>
              </lord-icon>
              <samp className='hidden  sm:block  text-base'>Home</samp>
              </button>
              </Link>

              <Link to='/search'>
              <button type='button' className='flex text-white  hover:bg-purple-800 rounded-lg text-sm px-5 py-2.5 text-start items-center  gap-2 w-full'>
              <lord-icon
                  src="https://cdn.lordicon.com/fkdzyfle.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style={{width: '25px', height: '25px'}}>
              </lord-icon>
              <samp className='hidden  sm:block  text-base'>Search</samp>
              </button>
              </Link>


              

            </div>
          </div>
        </div>

        {/* licence */}
        <div className='hidden  sm:block  ' title='created by Arnava Tivari'>
        <div className='flex flex-col items-center m-4'>
          <h1 className='text-base font-semibold ' >PixPortal
                <samp className='  text-2xl font-bold ml-3'>&#169;</samp>
          </h1>
          <samp className='font-mono  text-xs'>Copyright 2024</samp>
        </div>
        </div>
    </div>
  )
}

export default Sidebar