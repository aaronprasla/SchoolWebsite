import { useState, React } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Calendar from './CalendarSep.jsx'
import Staff from './StaffDirectory.jsx'

function Main() {


  return (
    <>

      <BrowserRouter>

        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/school-events' element={<Calendar />} />
          <Route path='/staff-directory' element={<Staff />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}


export default Main
