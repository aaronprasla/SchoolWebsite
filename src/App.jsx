import { useState, React } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Calendar from './CalendarSep.jsx'
import Staff from './StaffDirectory.jsx'
import Test from './test.jsx'

function Main() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/schoolWebsite/test' element={<Test />} />
          <Route path='/schoolWebsite/school-events' element={<Calendar />} />
          <Route path='/schoolWebsite/staff-directory' element={<Staff />} />
          <Route path='*' element={<Home />} />
        </Routes>``

      </BrowserRouter>
    </>
  )
}


export default Main
