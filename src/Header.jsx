import { useState, React } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css'
import jackLogo from "./assets/JackNew1.png"

function Header() {

  return (
    <>
      <Navbar expand="md" className='bg-body-tertiary overflow' data-bs-theme='dark' style={{ width: '100%', position: 'absolute', zIndex: '5' }}>
        <Navbar.Brand href="/" className='ms-3'>
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
              <NavDropdown.Item target='_blank' href="https://www.reginapublicschools.ca/attendance_boundaries">Attendance Boundaries</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://www.reginapublicschools.ca/registration">Registration</NavDropdown.Item>
              <NavDropdown.Item href="/staff-directory">Staff Directory</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://www.reginapublicschools.ca/transportation">Transportation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Parents'>
              <NavDropdown.Item target='_blank' href="https://sites.google.com/rbe.sk.ca/learningathome/home">Home Learning Supports</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://www.reginapublicschools.ca/lunchroom_registration">Lunchroom Registration</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://www.reginapublicschools.ca/schoolcashonline">School Cash Online Info</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://rbe.edsby.com">Edsby Parent Portal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/school-events'>Calendar</Nav.Link>
            <NavDropdown title='Quick Links'>
              <NavDropdown.Item target='_blank' href="https://www.google.ca">Google Apps</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="http://sms.bookshelf.ebookplus.pearsoncmg.com/ebook/viewerLogin.do">Pearson eText</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://www.reginapublicschools.ca/librarysupports">Library Resources Hub</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="http://www.myblueprint.ca/rbe">myBlueprint</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://rbe.edsby.com">Edsby Student Portal</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href="https://rbe.schoolcashonline.com/">School Cash Online</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header