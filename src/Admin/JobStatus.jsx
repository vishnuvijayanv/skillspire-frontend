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
        <div className="row p-5">
          <div className="col-lg-12 ms-5 border shadow">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, recusandae temporibus officia ut veritatis dolore commodi beatae. Cumque reiciendis culpa dolore, blanditiis omnis quo numquam placeat officia, illum aperiam suscipit.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table className="table table-hover ms-5">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Skills</th>
                  <th>Job Title</th>
                  <th>Job Category</th>
                  <th>Job Rates</th>
                </tr>
              </thead>
              <tbody>
                {
                  reqData?.length>0?
                  reqData.map((item)=>(<tr className="table-primary">
                  <td>{item.userID}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.skills}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.category}</td>
                  <td>{item.rates}</td>
                  <td><JobModal data = {item}/></td>
                </tr>)):
                  <p>No New Requests</p>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default JobStatus;
