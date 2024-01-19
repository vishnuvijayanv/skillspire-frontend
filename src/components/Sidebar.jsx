import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-2" >
      <Button variant="secondary" className="d-lg-none" onClick={handleShow}>
        <i class="fa-solid fa-bars" style={{ color: 'white' }}></i>
      </Button>

      <Offcanvas
        style={{ borderRight: '2px solid red',width:'240px'}}
        className={' h-100'}
        show={show}
        onHide={handleClose}
        responsive="lg sm "
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span style={{ color: 'yellowgreen' }}>Skill</span>Spire
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="ps-5 pe-3 flex-column text-align-justify">
          {/* <Offcanvas.Title>
            <span style={{ color: 'yellowgreen' }}>Skill</span>Spire
          </Offcanvas.Title> */}

          <h4 className='mt-5 mb-5'>Home</h4>

          <Link to={'/employerHome'}
            className=" w-100 text-start mb-3  h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-table-columns me-3" ></i>Dashboard
          </Link>

          <Link to={'/employerProfile'}
            className=" w-100 text-start mb-3  h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-regular fa-user me-4"></i>Profile
          </Link>
          <Link to={'/addjobs'}
            className=" w-100 text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-plus me-4"></i>Add Jobs
          </Link>

          <Link to={'/myjoblistings'}
            className=" w-100 text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-list me-3"></i>My Job Listings
          </Link>

          
          <Link to={'/jobstatus'}
            className=" w-100 text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            {' '}
            <i class="fa-solid fa-list-check me-4"></i>Job Status
          </Link>
          <Link
            className=" w-100 text-start mb-3 h-5 text-decoration-none d-block text-dark"
          >
            <i class="fa-regular fa-message me-4"></i>Chat
          </Link>
          <Button
            style={{ marginTop: '200px' ,height:'70px'}}
            className="bg-danger  w-100 text-start mb-3 text-decoration-none d-block text-dark"
          >
            <i class="fa-solid fa-right-from-bracket me-4"></i>LogOut
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
