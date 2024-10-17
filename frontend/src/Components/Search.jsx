import React, { useState} from 'react'


// API:https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${API_KEY}

const Search=()=> {

  const [search, setSearch] = useState('');

  const [data, setData] = useState([]);

  let API_KEY = "MEPdvnZgOqKoVMjvt8d45p84RPkaojzLsf12F1KpZfo"

  const handleSearch =(event)=>{
    setSearch(event.target.value);
  };

  const getData = ()=>{
    imgessearch(search);
  };
  const imgessearch = async(searchVal)=>{
    const get = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchVal}&client_id=${API_KEY}`)
    const jsonData = await get.json()
    setData(jsonData.results);
    console.log(jsonData)
  };
  console.log(data)
  return (
    <div className=' gap-4 m-4 '>
            <div className=' flex  sm:flex-row flex-col gap-4 sm:gap-10  '>
              <div>
                 <h1 className='font-mono text-xl font-bold'>PixPortal Image Gallary</h1>
              </div>
              <div>
                  <form className="flex items-center max-w-sm mx-auto">   
                      <label htmlFor="simple-search" className="sr-only">Search</label>
                      <div className="relative w-full">
                          <input onChange={handleSearch} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                      </div>
                      <button onClick={getData} type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-purple-700 rounded-lg border bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                          <span >Search</span>
                      </button>
                  </form>
              </div>
           </div>



       {/* api call pics  */}


            <div className='sm:grid sm:grid-cols-3 flex flex-col gap-5' >
              {data.map((curVal, index) =>(
                
                  <img key={index} className="rounded-lg w-auto h-44 " src={curVal.urls.small} alt="" />
              
                  ))}
            </div>
    </div>
   )
}

export default Search