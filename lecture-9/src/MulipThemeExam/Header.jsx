import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/Themeprov';
import { useContext } from 'react';

const Header = () => {
    const {CurrentStyle}= useContext(ThemeContext)
  return (
    <>
      <Navbar expand="lg" className="shadow-sm" style={CurrentStyle.base}>
        <Container>
          <Navbar.Brand href="/">Coders</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4  ">

              <NavLink className={({isActive})=> ` text-decoration-none 
              ${isActive ? "  text-danger " : "  text-info "}` } to="/">Home</NavLink>
             
              <NavLink className={({isActive})=> ` text-decoration-none 
              ${isActive ? "  text-danger " : "  text-info "}` } to="/about">About</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/contact">Contact</NavLink>

             

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header