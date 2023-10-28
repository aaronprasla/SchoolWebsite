import { useState, React } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css'
import jackLogo from "./assets/JackNew1.png" 

function Header() {

    return (
      <>
        <Navbar expand="md" className='bg-body-tertiary overflow' data-bs-theme='dark' style={{width: '100%', position: 'fixed', zIndex: '5'}}>
          <Navbar.Brand href="#home" className='ms-3'>
              <img
                src={jackLogo}
                width="190"
                height="57"
                className="d-inline-block align-top"
                alt="Jack MacKenzie Elementary School Logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <NavDropdown title='About Us' expand='false'>
              <NavDropdown.Item href="#">Attendance Boundaries</NavDropdown.Item>
              <NavDropdown.Item href="#">Programs</NavDropdown.Item>
              <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Item href="#">School Hours</NavDropdown.Item>
              <NavDropdown.Item href="#">School Image Galleries</NavDropdown.Item>
              <NavDropdown.Item href="#">Staff Directory</NavDropdown.Item>
              <NavDropdown.Item href="#">Transportation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='News'>
              <NavDropdown.Item href="#">Academics</NavDropdown.Item>
              <NavDropdown.Item href="#">Athletics</NavDropdown.Item>
              <NavDropdown.Item href="#">Arts</NavDropdown.Item>
              <NavDropdown.Item href="#">Community</NavDropdown.Item>
              <NavDropdown.Item href="#">Division</NavDropdown.Item>
              <NavDropdown.Item href="#">Library</NavDropdown.Item>
              <NavDropdown.Item href="#">Newsletters</NavDropdown.Item>
              <NavDropdown.Item href="#">Reminder</NavDropdown.Item>
              <NavDropdown.Item href="#">SCC Info</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Parents'>
              <NavDropdown.Item href="#">Home Learning Supports</NavDropdown.Item>
              <NavDropdown.Item href="#">Digital Citizenship</NavDropdown.Item>
              <NavDropdown.Item href="#">Lunchroom Registration</NavDropdown.Item>
              <NavDropdown.Item href="#">School Cash Online Info</NavDropdown.Item>
              <NavDropdown.Item href="#">Edsby Parent Portal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Calendar</Nav.Link>
            <NavDropdown title='Quick Links'>
              <NavDropdown.Item href="#">Google Apps</NavDropdown.Item>
              <NavDropdown.Item href="#">Pearson eText</NavDropdown.Item>
              <NavDropdown.Item href="#">Learning Links</NavDropdown.Item>
              <NavDropdown.Item href="#">Library Resources Hub</NavDropdown.Item>
              <NavDropdown.Item href="#">myBlueprint</NavDropdown.Item>
              <NavDropdown.Item href="#">Edsby Student Portal</NavDropdown.Item>
              <NavDropdown.Item href="#">School Cash Online</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default Header