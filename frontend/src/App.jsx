import React  from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

import './App.css'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Search from './Components/Search'


function App() {


  return (
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
        
  )
}

export default App
