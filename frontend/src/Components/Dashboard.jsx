import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


const Dashboard=()=> {
  return (
    <div className='flex sm:flex-row flex-col-reverse gap-4'>
        <div className=' sm:fixed left-0  sticky bottom-0 sm:w-56'>
          <Sidebar/>
        </div>

        <div className=' sm:ml-64 ml-0'>
              <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard