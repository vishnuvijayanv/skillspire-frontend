// JobStatus.js

import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { AdminJobDataContext, jobRequestContext } from '../context/ContextShare';
import { getRequestAPI, statusUpdate } from '../Services/allApi';
import JobModal from '../components/JobModal';
import { baseurl } from '../Services/baseurl';

function JobStatus() {
  const { adminJobData, setAdminJobData } = useContext(AdminJobDataContext);
  const {jobReqStatus,setJobReqStatus} = useContext(jobRequestContext)

  const [reqData,setReqData] = useState({})
  const [applies,setApplies] = useState({
    userID:"",
    jobID:"",
    name:"",
    email:"",
    skills:"",
    jobTitle:"",
    category:"",
    rates:"",
    profile:"",
    jobDesc:"",
    status:"",
    time:""
  })
  useEffect(() => {
    console.log(adminJobData); // Log or perform actions when adminJobData changes
  }, [adminJobData]);

  const jobRequest = async()=>{
    const token = sessionStorage.getItem("token")
        console.log(token);
        const reqheader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }

      const result = await getRequestAPI(reqheader)
      console.log(result);
      if (result.status === 200) {
        const pendingRequests = result.data.filter((request) => request.status === "pending");
        setReqData(pendingRequests)

      }
      else{
        console.log(result.response.data);
      }

  }

  useEffect(()=>{
    jobRequest()
  },[jobReqStatus])


  const shortlist = async (data) => {
    const updatedApplies = {
      userID: data.userID,
      jobID: data.jobID,
      name: data.name,
      email: data.email,
      skills: data.skills,
      jobTitle: data.jobTitle,
      category: data.category,
      rates: data.rates,
      profile: data.profile,
      jobDesc: data.jobDesc,
      status: "Accepted",
      time: data.time,
    };
  
    const id = data._id;
  
    const token = sessionStorage.getItem("token");
    const reqheader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    await statusUpdate(id, updatedApplies, reqheader);
    setApplies(updatedApplies);
  };
  
  const reject = async (data) => {
    const updatedApplies = {
      userID: data.userID,
      jobID: data.jobID,
      name: data.name,
      email: data.email,
      skills: data.skills,
      jobTitle: data.jobTitle,
      category: data.category,
      rates: data.rates,
      profile: data.profile,
      jobDesc: data.jobDesc,
      status: "Rejected",
      time: data.time,
    };
  
    const id = data._id;
  
    const token = sessionStorage.getItem("token");
    const reqheader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    await statusUpdate(id, updatedApplies, reqheader);
    setApplies(updatedApplies);
  };
  
  useEffect(() => {
    console.log("Updated applies state:", applies);
    // After `applies` state is updated, trigger the job request
    jobRequest();
  }, [applies]);
  
  useEffect(() => {
    // Log or perform actions when adminJobData changes
    console.log(adminJobData);
  }, [adminJobData]);
  

  
  
  return (
    <div className='row'>
      <div className="col-lg-2">
        <Sidebar />
      </div>
      <div className="col-lg-9 container">

        {
          reqData.length>0?
          reqData.map((item)=>(<div className="row mb-5 border rounded">
          <div className="col-lg-12">
            <div className="row p-3">
              <div className="col-lg-4 d-flex">
                <img src={`${baseurl}/uploads/${item.profile}`} width={'80px'} height={'80px'} className='border rounded' alt="" />
                <div className='ms-4'>
                  <h5 className='fw-bold'>{item.name}</h5>
                  <h6>Applied On :{item.time}</h6>

                  </div>

              </div>
              <div className="col-lg-4">
                <h5 className='fw-bold '>{item.jobTitle}</h5>
               <p> <i style={{fontSize:'11px'}} class="fa-regular fa-circle text-primary"></i><span className='text-dark fw-bold fs-6 me-2'>Category:</span> {item.category}</p>
               <p> <i style={{fontSize:'11px'}} class="fa-regular fa-circle text-primary"></i><span className='text-dark fw-bold fs-6 me-2'>Salary:</span> {item.rates}</p>

              </div>
              <div className="col-lg-4 d-flex flex-column">
                <button className=' shortbtn w-50 mb-3' onClick={()=>shortlist(item)}><i class="fa-solid fa-list "></i>Shortlist</button>
                <button onClick={()=>reject(item)} className='shortbtn w-50 bg-danger'><i class="fa-regular fa-circle-xmark"></i>Reject</button>

              </div>
            </div>
          </div>
        </div>)):
        <p>Nothing To Display</p>
        }

        {/* <div className="row">
          <div className="col-lg-12 w-100">
          <div className="table-container ms-5 p-5 border shadow rounded" style={{ maxWidth: '100%', overflow: 'auto' }}>
            <h3 className='fw-bold mb-3'>All Applicants!</h3>
            <h6>Ready to jump back in?</h6>
  <table className="table table-hover border table-responsive">
    <thead>
      <tr>
        <th style={{color:'#1b97d0'}} className='fw-1 fs-6'>User ID</th>
        <th style={{color:'#1b97d0'}} className='fw-1 fs-6'>Name</th>
        <th style={{color:'#1b97d0'}} className='fw-1 fs-6'>Email</th>
        <th style={{color:'#1b97d0'}} className='fw-1 fs-6'>Skills</th>
        <th style={{color:'#1b97d0'}} className='fw-1 fs-6'>Job Title</th>
        <th style={{color:'#1b97d0'}} className='fw-1 fs-6'>Job Category</th>
        <th style={{color:'#1b97d0'}} className='fw-1 fs-6'>Job Rates</th>
      </tr>
    </thead>
    <tbody>
      {reqData?.length > 0 ? (
        reqData.map((item) => (
          <tr key={item.userID}>
            <td>{item.userID}</td>
            <td>{item.name}</td>
            <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
            <td>{item.skills}</td>
            <td>{item.jobTitle}</td>
            <td>{item.category}</td>
            <td>{item.rates}</td>
            <td><JobModal data={item} /></td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7"><p>No New Requests</p></td>
        </tr>
      )}
    </tbody>
  </table>
</div>

          </div>
        </div> */}
      </div>
      
    </div>
  );
}

export default JobStatus;
