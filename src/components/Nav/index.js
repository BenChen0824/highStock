import React from 'react'
import {Navbar,Container} from 'react-bootstrap'

function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Highstock Dashboard
          </Navbar.Brand>
        
      </Navbar>
    </>
  )
}

export default Nav