import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <Fragment>
        <NavLink to='/change-password' className='nav-link' style={{ color: '#000', textDecoration: 'none' }}>Change Password</NavLink>
        <NavLink to='/sign-out' className='nav-link' style={{ color: '#000', textDecoration: 'none' }}>Sign Out</NavLink>
    </Fragment>
)

const unauthenticatedOptions = (
    <Fragment>
        <NavLink to='/sign-up' className='nav-link text-center' style={{ color: '#000', textDecoration: 'none' }}>Sign Up</NavLink>
        <NavLink to='/sign-in' className='nav-link text-center' style={{ color: '#000', textDecoration: 'none' }}>Sign In</NavLink>
    </Fragment>
)

const Header = ({ user }) => (
    <Navbar bg='light' variant='dark' expand='md'>
        <Navbar.Brand>
            <Link to='/' className='font-weight-bold' style={{ color: '#000', textDecoration: 'none', margin: '0 2rem' }}>ARCHI.VIN</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' style={{ background: '#111' }}/>
        <Navbar.Collapse className="d-md-flex flex-row-reverse " id='basic-navbar-nav'>
            <Nav >
                {user && (
                    <span className='navbar-text mr-2 d-md-block d-none' style={{ color: '#000', textDecoration: 'none' }}>Welcome, {user.email}</span>
                )}
                {user ? authenticatedOptions : unauthenticatedOptions}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
