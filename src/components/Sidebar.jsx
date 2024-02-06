import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link,useNavigate } from 'react-router-dom';
import Logo from '../Images/Blue_Minimalist_Letter_D_Logo-removebg-preview.png'
import { isAuthTokenContext } from '../context/ContextShare';

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const{isAuthToken , setIsAuthToken} = useContext(isAuthTokenContext)

  const navigate = useNavigate()
  const handleLogout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    setIsAuthToken(false)
    navigate('/')
  }
  return (
    <div className="" style={{backgroundColor:'#ffffff',position:'fixed'}}>
      <Button variant="secondary" className="d-lg-none" onClick={handleShow}>
        <i class="fa-solid fa-bars" ></i>
      </Button>

      <Offcanvas
        style={{ borderRight: '2px solid red',width:'240px'}}
        className={' h-100'}
        show={show}
        onHide={handleClose}
        responsive="lg sm "
      >
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <img src={Logo} width={'80px'} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header> */}
          <div className='d-flex'>
            <img src={Logo} width={'80px'} alt="" />
            <h2 className='fw-bold mt-3'>Skillspire</h2>
          </div>
        <Offcanvas.Body className="ps-5 pe-3 mt-5 flex-column text-align-justify">
          {/* <Offcanvas.Title>
            <span style={{ color: 'yellowgreen' }}>Skill</span>Spire
          </Offcanvas.Title> */}

        

          <Link to={'/employerHome'}
            className=" w-100 side-menu  text-start mb-3    h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-table-columns me-4 text-primary" ></i>Dashboard
          </Link>

          <Link to={'/employerProfile'}
            className="w-100 side-menu  text-start mb-3  h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-regular fa-user me-4 text-primary"></i>Company Profile
          </Link>
          <Link to={'/addjobs'}
            className="w-100 side-menu  text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-plus me-4 text-primary"></i>Post A New Job
          </Link>

          <Link to={'/notifications'}
            className="w-100 side-menu  text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-bell me-4 text-primary"></i>Resume Alerts
          </Link>
         
          {/* <Link to={'/myjoblistings'}
            className="w-100 side-menu  text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-list me-4 text-primary"></i>My Job Listings
          </Link> */}
          
          <Link to={'/jobstatus'}
            className="w-100 side-menu  text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            {' '}
            <i class="fa-solid fa-list-check me-4 text-primary"></i>Job Status
          </Link>
          <Link to={'/myteam'}
            className="w-100 side-menu  text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-people-group me-4 text-primary"></i>My Team
          </Link>
          <Link
            className="w-100 side-menu  text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-regular fa-message me-4 text-primary"></i>Chat
          </Link>
          <Button
            style={{marginTop:'200px'}}
            className=" btn btn-danger w-100 side-menu  text-start mb-3 text-decoration-none d-block text-light"
            onClick={handleLogout}
          >
            <i class="fa-solid fa-right-from-bracket me-4 "></i>LogOut
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
