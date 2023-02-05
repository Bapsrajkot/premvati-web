import React from 'react'
import { Container, Dropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar className='py-2'>
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/dashboard">
                    <img src='img/logo.png' style={{ width: "180px" }} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end profile">
                    <Navbar.Text>
                        <Dropdown>
                            <Dropdown.Toggle className='bg-white '  id="dropdown-basic" >
                              <img src='./img/profile.png' alt=''/>
                              Akshar Purushottam Maharaj
                            </Dropdown.Toggle>

                            {/* <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Notification</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu> */}
                        </Dropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
