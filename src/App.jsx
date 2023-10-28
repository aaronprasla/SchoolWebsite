import { useState, React } from 'react'
import Header from './Header.jsx'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'

function Main() {


  return (
    <>

      <BrowserRouter>

        <Header></Header>
        <Routes>
          <Route path='' element={<Home />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}


export default Main
