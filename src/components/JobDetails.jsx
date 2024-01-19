// JobDetails.js

import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { appliedAPI, getAJobAPI } from '../Services/allApi';
import { baseurl } from '../Services/baseurl';
import { UserJobDataContext } from '../context/ContextShare';

function JobDetails() {
  const { userJobData, setUserJobData } = useContext(UserJobDataContext);
  const params = useParams();
  const pid = params.id;
  const [jobData, setJobData] = useState({});
  const [userData, setUserData] = useState({});
  const [applies,setApplies] = useState({
    userID:"",
    name:"",
    email:"",
    skills:"",
    jobTitle:"",
    category:"",
    rates:"",
    profile:"",
    jobDesc:"",
    status:""
  })

  const getJobDetails = async () => {
    const token = sessionStorage.getItem('token');
    const reqheader = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const result = await getAJobAPI(pid, reqheader);
    console.log(result.data);

    if (result.status === 200) {
      setJobData(result.data.aJobData[0]);
      setUserData(result.data.userData[0]);
      setUserJobData(result.data); // Set user's job data


    }
  };

  useEffect(() => {
    getJobDetails();
    setApplies({
      userID:userData._id,
      jobID:jobData._id,
      name:userData.firstName,
      email:userData.email,
      skills:jobData.skills,
      jobTitle:jobData.title,
      category:jobData.category,
      rates:jobData.rates,
      profile:userData.profile,
      jobDesc:jobData.description,
      status:"pending"
  
    })
  }, []);

  const applyJob =async()=>{
    
  
    console.log(applies);

    const token = sessionStorage.getItem("token")
        console.log(token);
        const reqheader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }

    const result = await appliedAPI(applies,reqheader)
    console.log(result);
  }


  
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-6">
          <img src={`${baseurl}/uploads/${jobData.image}`} width={'100%'} alt="" />
        </div>
        <div className="col-lg-6">
          <div className='border rounded ps-5 w-75 dark flex-column '>
            <h4 className='text-center mb-5'>Job Summary</h4>
            <h5 className='mb-3' >Job Title: {jobData.title}</h5>
            <h5 className='mb-3'>Published on:19/02/2023 19:24</h5>

            <h5 className='mb-3'>Category : {jobData.category}</h5>

            <h5 className='mb-3'>Skills Required:{jobData.skills}</h5>

            <h5 className='mb-3'>Job Status: <span className='text-success'>Active</span></h5>
            <h5 className='mb-3'>Salary:{jobData.rates}</h5>
            <h5>Application Deadline: April 28, 2019</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className='border rounded ps-5 w-75 dark flex-column '>
            <h4 className='text-center text-success mt-5 mb-5'>Company Information</h4>
            <h5 className='mb-3' >{userData?.firstName}</h5>
            <p>{userData?.about}</p>
            <h5 className='mb-3'>Category:{userData?.category}</h5>
            <h5 className='mb-3'>Email:{userData?.email}</h5>
          </div>
        </div>
        <div className="col-lg-6 mt-5">
          <h4 className='text-success'>Job Description</h4>
          <p style={{ textAlign: 'justify' }}>{jobData.description}</p>
          <Button onClick={applyJob} variant="contained" className='w-100' style={{ backgroundColor: 'yellowgreen' }}>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
