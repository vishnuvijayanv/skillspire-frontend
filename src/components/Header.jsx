import React, { useState ,useEffect, useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/Blue_Minimalist_Letter_D_Logo-removebg-preview.png'
import { isAuthTokenContext } from '../context/ContextShare';
import { useNavigate } from 'react-router-dom';



function Header() {
  const [isToken,setIsToken] = useState(false)
  const [isEmployee,setIsEmployee] = useState(true)
  const{isAuthToken , setIsAuthToken} = useContext(isAuthTokenContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIsToken(true)
      
    }
  },[isAuthToken])

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

  const handleLogout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    setIsAuthToken(false)
    navigate('/')
  }
  return (
    <div className=' ' >
 {
  isEmployee&&<Navbar expand="lg" className="navbar navbar-expand-lg " >
  <Container fluid>
  <Navbar.Brand href="#home" className='fs-4 fw-bold ' >
    <img src={Logo} className='mt-2 ' height={'50px'} width={'50px'} alt="" />
    SkillSpire</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '50px' }} navbarScroll>
      </Nav>
      <Nav className="ml-auto" >
       { isToken?
       <>
          <Nav.Link className='nav-link text-dark fw-bold' href="/dashboard">Top Jobs</Nav.Link>
          <Nav.Link className='nav-link text-dark fw-bold' href="/appliedjobs">Applied Jobs</Nav.Link>
          <Nav.Link  className='nav-link text-dark fw-bold' href="/profile">Profile</Nav.Link>
          <Nav.Link  className='nav-link text-dark fw-bold' href="/faq">FAQ</Nav.Link>
          <Nav.Link onClick={handleLogout} style={{overflowY:'hidden'}} className='nav-link mt-1' ><i class="fa-solid fa-right-from-bracket text-danger fw-bold"></i></Nav.Link>
          {/* <button
            className=" btn btn-danger w-100  text-light"
            onClick={handleLogout}
          >LogOut</button> */}
        </>:
        <>
        <Nav.Link href="/login" className='H-btn border rounded ps-4 pe-4 me-3' style={{backgroundColor:"white",color:'#00A7AC'}}>Login</Nav.Link>
        <Nav.Link href="/register" className='H-btn border rounded ps-4 pe-4' style={{backgroundColor:"#00A7AC",color:'white'}}>Register</Nav.Link>
       
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