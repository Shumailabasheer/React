import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';
const Header = () => {
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> 
        <Navbar.Brand>React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  gap-4">
            <NavLink className={({isActive})=> `text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}`} to={'/home'}>Home</NavLink>
            <NavLink  className={({isActive})=> `text-decoration-none
              ${isActive ? "  text-danger" : "  text-info"}`} to={'/about'}>About</NavLink>
            <NavLink className={({isActive})=> `text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}`} to={'/contact'} >Contact</NavLink>
           
           <NavLink className={({isActive})=> `text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}`} to={'/Post'} >Post</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   </>
  )
}

export default Header
