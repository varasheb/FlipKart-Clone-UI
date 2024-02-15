import React from 'react'
import Header from './Component/Util/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Util/Footer'

const App = () => {
  return (
    <div className=' h-svh w-svw'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App


