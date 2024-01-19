import React, { useState ,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  const [isToken,setIsToken] = useState(false)

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIsToken(true)
      
    }
  },[])
  return (
    <div className=' ' >
 

<Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
  <Container fluid>
  <Navbar.Brand href="#home" className='fs-4 fw-bold ' style={{color:'yellowgreen'}}>Skill<span style={{color:'black'}}>Spire</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
      </Nav>
      <Nav className="ml-auto" navbarScroll>
       { isToken?
       <>
          <Nav.Link href="/dashboard">Top Jobs</Nav.Link>
          <Nav.Link href="/microtasks">MicroTasks</Nav.Link>
          <Nav.Link href="/appliedjobs">Applied Jobs</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </>:
        <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
       
      </>}

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


        
    </div>
  )
}

export default Header