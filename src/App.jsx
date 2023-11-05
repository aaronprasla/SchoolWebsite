import { useState, React } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Calendar from './CalendarSep.jsx'
import Staff from './StaffDirectory.jsx'

function Main() {


  return (
    <>

        <Header></Header>
        <Routes>
          <Route path='/SchoolWebsite/' element={<Home />} />
          <Route path='/SchoolWebsite/school-events' element={<Calendar />} />
          <Route path='/SchoolWebsite/staff-directory' element={<Staff />} />
          <Route path='*' element={<Home />} />
        </Routes>


    </>
  )
}


export default Main
