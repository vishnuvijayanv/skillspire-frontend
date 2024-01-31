// JobDetails.js

import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { appliedAPI, getAJobAPI } from '../Services/allApi';
import { baseurl } from '../Services/baseurl';
import { UserJobDataContext } from '../context/ContextShare';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function JobDetails() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userJobData, setUserJobData } = useContext(UserJobDataContext);
  const params = useParams();
  const pid = params.id;
  const [jobData, setJobData] = useState({});
  const [userData, setUserData] = useState({});
  const [applies, setApplies] = useState({
    userID: "",
    jobID: "",
    name: "",
    email: "",
    skills: "",
    jobTitle: "",
    category: "",
    rates: "",
    profile: "",
    jobDesc: "",
    status: "",
    time: ""
  });

  const getJobDetails = async () => {
    const token = sessionStorage.getItem('token');

    const reqheader = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await getAJobAPI(pid, reqheader);
      console.log(result.data);

      if (result.status === 200) {
        setJobData(result.data[0]);
        setUserJobData(result.data);
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  useEffect(() => {
    getJobDetails();
  }, [pid]);

  useEffect(() => {
    console.log("Updated jobData:", jobData);

    const userId = JSON.parse(sessionStorage.getItem("existingUser"));
    setUserData(userId);

    const currentDate = new Date().toLocaleDateString();
    console.log('Application submitted on:', currentDate);
    setApplies({
      userID: userId._id,
      jobID: jobData._id,
      name: userId.firstName,
      email: userId.email,
      skills: jobData.skills,
      jobTitle: jobData.title,
      category: jobData.category,
      rates: jobData.rates,
      profile: jobData.image,
      jobDesc: jobData.description,
      status: "pending",
      time: currentDate
    });

    console.log(applies);
  }, [jobData]);

  const applyJob = async () => {
    const currentDate = new Date().toLocaleDateString();
    console.log('Application submitted on:', currentDate);
    setApplies({
      userID: userData._id,
      jobID: jobData._id,
      name: userData.firstName,
      email: userData.email,
      skills: jobData.skills,
      jobTitle: jobData.title,
      category: jobData.category,
      rates: jobData.rates,
      profile: jobData.image,
      jobDesc: jobData.description,
      status: "pending",
      time: currentDate
    });

    const token = sessionStorage.getItem("token");
    console.log(token);
    const reqheader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };
    console.log(applies);

    try {
      const result = await appliedAPI(applies, reqheader);
      console.log(result);

      if (result.status === 200) {
        alert("Applied Successfully");
        navigate('/dashboard');
      } else {
        alert(result.response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Error applying for the job:", error);
    }
  };

  return (

      <div className='bg' >
          <div className=' container '  >
            <div className='row'>
              <div className="col-lg-8 mt-5" style={{ backgroundColor: "#f0ffff" }}>
              <div className='border rounded p-5 w-100 dark flex-column ' >
                <h4 className='text-center mb-5 text-dark'>Job Summary</h4>
                <h5 className='mb-3'>Job Title: <span style={{ float:'right',color:'grey' }}>{jobData.title}</span></h5>
                <h5 className='mb-3'>Published on:<span style={{ float:'right',color:'grey' }}>19/02/2023 19:24</span></h5>
                <h5 className='mb-3'>Category :<span style={{ float:'right',color:'grey' }}> {jobData.category}</span></h5>
                <h5 className='mb-3'>Skills Required:<span style={{ float:'right',color:'grey' }}>{jobData.skills}</span></h5>
                <h5 className='mb-3'>Job Status: <span className='text-success' style={{ float:'right',color:'grey' }}>Active</span></h5>
                <h5 className='mb-3'>Salary:<span style={{ float:'right',color:'grey' }}>{jobData.rates}</span></h5>
                <h5>Application Deadline: <span style={{ float:'right',color:'grey' }}>April 28, 2024</span></h5>
             
                <h4 className='text-Dark mt-5'>Job Description</h4>
                <p className='mt-4 mb-5' style={{ textAlign: 'justify' ,color:'grey'}}>{jobData.description}</p>
                <Button onClick={applyJob} variant="contained" className='w-100' style={{ backgroundColor: '#C8E9E9' ,color:'blue'}}>Apply Now</Button>
                </div>
    
            
              </div>
              <div className="col-lg-4 mt-5 border rounded shadow" style={{ backgroundColor: "#f0ffff" }}>
                <div className='d-flex justify-content-center align-items-center ms-5'>
                    <img src={`${baseurl}/uploads/${jobData.image}`} width={'100%'} alt="" className="img-fluid" />
                </div>               
                  <div className='ps-5 w-100 dark flex-column'>
                  <h4 className='text-center text-dark mt-5 mb-5'>Company Information</h4>
                  <h5 className='mb-3'>Company Name <span style={{ float:'right',color:'grey' }}> {userData?.firstName}</span></h5>
                  <p>{userData?.about}</p>
                  <h5 className='mb-3'>Category<span style={{ float:'right',color:'grey' }}> {userData?.category}</span></h5>
                  <h5 className='mb-3'>Email<span style={{ float:'right',color:'grey' }}>{userData?.email}</span></h5>
                  <h5 className='mb-3'>Phone<span style={{ float:'right',color:'grey' }}>{/* Replace with userData?.phone */}</span></h5>
                  <h5 className='mb-3'>Location<span style={{ float:'right',color:'grey' }}>{/* Replace with userData?.location */}</span></h5>
                  <Button  variant="contained"  onClick={handleShow} style={{ backgroundColor: 'blue' }}>Private Message</Button>
    
                 </div>
    
              </div>
            </div>
  
            <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          style={{borderRadius:'50px'}}
        >
          <Modal.Header closeButton >
            <Modal.Title className='text-center'>Skill<span style={{color:'yellowgreen'}}>spire</span> Connect</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form className='mt-5'>
          
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Your Name</Form.Label> */}
          <Form.Control type="text" className='border rounded text-dark'  placeholder="Your Name"   />
        </Form.Group>
  
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                {/* <Form.Label>Message</Form.Label> */}
                <Form.Control as="textarea" rows={3}  placeholder='Message'  />
            </Form.Group>
            <button className='form-control btn btn-primary'>Send Message</button>
  
        
        
                </Form>
  
          </Modal.Body>
         
        </Modal>
          </div>
      </div>
  );
}

export default JobDetails;
