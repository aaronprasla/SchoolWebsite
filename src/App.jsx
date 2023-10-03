import { useState, React } from 'react'
import Header from '/Users/aaron/school-website/src/Header.jsx'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from '/Users/aaron/school-website/src/Home.jsx'

function Main() {


  return (
    <>

      <BrowserRouter basename={"/"}>
        
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          
      </BrowserRouter>

    </>
  )
}


export default Main
