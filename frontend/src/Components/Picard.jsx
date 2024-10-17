import React from 'react'

const Picard=({imgurl,title,publi,price})=> {
  return (
    <div >
      <div className='flex flex-col sm:m-2 m-4'>
         <div >
            <a href="#">
              <img className="rounded-lg w-80 h-44 " src={imgurl} alt="" />
            </a>
          </div>

          <div className='flex flex-col'>
           <div>
              <h1 className='font-mono'>Title: {title}</h1>
              <h2 className='font-mono'>Published by: {publi}</h2>
              <h3  className='font-mono'>Price: {price}</h3>

           </div>

           <div>
              <button type="button" class="sm:w-80 w-72 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Download</button>
           </div>
          </div>
      </div>
    </div>

  )
}

export default Picard