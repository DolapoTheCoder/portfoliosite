import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import styles from './MenuBar.css'
import { NavLink } from 'react-router-dom'
import LOGO from './LOGO.jpg'

const MenuBar = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/">
          <img src={LOGO} alt="logo" className="nav-logo" />{' '}DeCentral Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className={styles.navLink}>Our Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/community" className={styles.navLink}>Our Community</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MenuBar