import React, { useState ,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/Blue Minimalist Letter D Logo.png'


function Header() {
  const [isToken,setIsToken] = useState(false)
  const [isEmployee,setIsEmployee] = useState(true)

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIsToken(true)
      
    }
  },[])

  useEffect(()=>{
  if (sessionStorage.getItem("existingUser")) {
    const userType =  JSON.parse(sessionStorage.getItem("existingUser")).uType
  console.log(userType);
  if (userType == "Employee") {
    setIsEmployee(true)
    
  }
  else{
    setIsEmployee(false)
  }
  }
  },[])
  return (
    <div className=' ' >
 {
  isEmployee&&<Navbar expand="lg" className="navbar navbar-expand-lg " >
  <Container fluid>
  <Navbar.Brand href="#home" className='fs-4 fw-bold ' style={{color:'black'}}>
    <img src={Logo} className='mt-2' width={'80px'} alt="" />SkillSpire</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
      </Nav>
      <Nav className="ml-auto" >
       { isToken?
       <>
          <Nav.Link className='nav-link text-dark' href="/dashboard">Top Jobs</Nav.Link>
          <Nav.Link className='nav-link text-dark' href="/microtasks">MicroTasks</Nav.Link>
          <Nav.Link className='nav-link text-dark' href="/appliedjobs">Applied Jobs</Nav.Link>
          <Nav.Link className='nav-link text-dark' href="/profile">Profile</Nav.Link>
        </>:
        <>
        <Nav.Link href="/login" className='H-btn border rounded ps-4 pe-4 me-3' style={{backgroundColor:"#f0ffff"}}>Login</Nav.Link>
        <Nav.Link href="/register" className='H-btn border rounded ps-4 pe-4' style={{backgroundColor:"#f0ffff"}}>Register</Nav.Link>
       
      </>}

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 }




        
    </div>
  )
}

export default Header