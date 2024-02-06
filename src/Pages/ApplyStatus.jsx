import React, { useContext, useEffect, useState } from 'react'
import { getUserAppliesAPI } from '../Services/allApi';
import { baseurl } from '../Services/baseurl';
import { jobRequestContext } from '../context/ContextShare';

function ApplyStatus() {
  const [userJobs,setUserJobs] = useState({})
  const {jobReqStatus,setJobReqStatus} = useContext(jobRequestContext)

  const appliedJobs = async()=>{
    const token = sessionStorage.getItem("token")
    console.log(token);
    const reqheader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await getUserAppliesAPI(reqheader)
    console.log(result.data);
    setUserJobs(result.data)

  }
  useEffect(()=>{
    appliedJobs()
  },[jobReqStatus])
  return (
   
    <div className='container '>
      <div className="row border shadow" >
        <div className="col-lg-12 mt-5" >
          <h4>My Jobs</h4>
        </div>
     
    
     <div className='col-lg-12 mt-5'>
  <div className=''>
  <div className="table-responsive">
  <table className='table w-100 border rounded' style={{ borderColor: '#00A7AC' }}>
    <thead style={{ borderColor: '#00A7AC' }}>
      <tr style={{ borderColor: '#00A7AC' }}>
        <th className='fw-1 fs-6' style={{ color: '#004F98' }}>Job Title</th>
        <th className='fw-1 fs-6' style={{ color: '#004F98' }}></th>
        <th className='fw-1 fs-6' style={{ color: '#004F98' }}>Date Applied</th>
        <th className='fw-1 fs-6' style={{ color: '#004F98' }}>Status</th>
      </tr>
    </thead>
    <tbody>
      {userJobs?.length > 0 ? (
        userJobs?.map((item) => (
          <tr className='mt-4 border shadow' key={item.id}>
            <td className='d-flex mt-2'>
              <div className='d-flex justify-content-between'  >
                <img src={`${baseurl}/uploads/${item.profile}`} width={'60px'} height={'60px'} style={{ borderRadius: '50%' }} alt="" />
                <h5 className='ms-5' style={{ fontWeight: 'bold' }}>{item.jobTitle}</h5>
              </div>
            </td>
            <td>
              <div className='d-flex flex-column flex-lg-row ms-5 ms-lg-0 text-center'>
                <h6 className='mt-4 ms-4' style={{ color: ' #004F98' }}><i className="fa-solid fa-building"><span className='text-dark ms-2'>{item.name} </span></i></h6>
                <h6 className='mt-4 ms-2' style={{ color: ' #004F98' }}><i className="fa-solid fa-briefcase"> <span className='text-dark ms-2'>{item.category}</span></i></h6>
                <h6 className='mt-4 ms-3 ' style={{ color: ' #004F98' }}><i className="fa-solid fa-money-bill"><span className='text-dark'>{item.rates}  </span></i></h6>
              </div>
            </td>
            <td>{item.time}</td>
            {
              item.status === "pending" ?
                <td className='text-warning border '><button className='btn btn-warning'>{item.status}</button></td> :
                item.status === "Accepted" ?
                 <div className='d-flex flex-column'>
                    <td className='text-success'><button className='btn btn-success'>{item.status}</button></td>
                    <p style={{fontSize:'10px'}} className='text-danger'>*Employer will Contact you soon via Email/phone</p>
                 </div>
                   :
                  <td className='text-danger'><button className='btn btn-danger'>{item.status}</button></td>
            }
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No Applied Jobs</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  </div>
</div>

     </div>
    </div>
  )
}

export default ApplyStatus