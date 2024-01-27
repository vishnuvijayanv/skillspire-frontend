// JobStatus.js

import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { AdminJobDataContext, jobRequestContext } from '../context/ContextShare';
import { getRequestAPI } from '../Services/allApi';
import JobModal from '../components/JobModal';

function JobStatus() {
  const { adminJobData, setAdminJobData } = useContext(AdminJobDataContext);
  const {jobReqStatus,setJobReqStatus} = useContext(jobRequestContext)

  const [reqData,setReqData] = useState({})

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
        setReqData(result.data)

      }
      else{
        console.log(result.response.data);
      }

  }

  useEffect(()=>{
    jobRequest()
  },[jobReqStatus])
  return (
    <div className='row'>
      <div className="col-lg-2">
        <Sidebar />
      </div>
      <div className="col-lg-9">
        {/* <div className="row p-5">
          <div className="col-lg-12 ms-5 border shadow">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, recusandae temporibus officia ut veritatis dolore commodi beatae. Cumque reiciendis culpa dolore, blanditiis omnis quo numquam placeat officia, illum aperiam suscipit.</p>
          </div>
        </div> */}

        <div className="row">
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
        </div>
      </div>
      
    </div>
  );
}

export default JobStatus;
