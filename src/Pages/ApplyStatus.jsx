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
    // <div className='container'>
    //   <div className="row">
    //     <div className="col-lg-12">
    //       <img src="https://assets-au-01.kc-usercontent.com/b808e7df-fe01-0274-1d5c-5c63d097ef17/608af629-2e8e-4490-89e1-295e071f4505/psychologists-near-me.jpg"  width={'100%'} alt="" />
    //     </div>
    //   </div>
    //   {
    //     userJobs?.length>0?
    //     userJobs.map((item)=>(
    //       <div className='row  mt-5 border shadow'>
    //     <div className="col-lg-1 col-sm-12 p-3 ">
  
    //      <img src={`${baseurl}/uploads/${item.profile}`} className='img-fluid' width={'100px'} alt="" />
    //     </div>
    //     <div className="col-lg-8 ms-5">
    //     <h3 className='mt-4'>{item.jobTitle}</h3>
    //     <div className='d-flex'>
    //       <h6 className='mt-4' style={{color:'yellowgreen'}}><i class="fa-solid fa-building"><span className='text-dark' > {item.name}</span></i></h6>
    //       <h6 className='mt-4 ms-2' style={{color:'yellowgreen'}}><i class="fa-solid fa-briefcase"> <span className='text-dark'>{item.category}</span></i></h6>
    //       <h6 className='mt-4 ms-3 ' style={{color:'yellowgreen'}}><i class="fa-solid fa-money-bill"><span className='text-dark'>{item.rates}</span></i></h6>

    //     </div>
    //     </div>
    //     <div className="col-lg-2 h-100 p-3 ">
    //       <div className='border shadow  mb-3 ' style={{height:'50px',overflow:'hidden'}}>
    //       {
    //             item?.status == "pending"?
    //             <h4>Status <span className='text-warning'>{item.status}</span></h4>:
    //             item?.status == "Rejected"?
    //             <h4>Status <span className='text-danger'>{item.status}</span></h4>:
    //             item?.status == "Accepted"?
    //             <h4>Status <span className='text-success'>{item.status}</span></h4>:
    //             <p>null</p>
    //           }</div>
    //         <a className='mt-5 ms-5' href="">View More</a>
    //     </div>
    //   </div>

    //     )):
    //     <p>No Jobs Applied</p>
    //   }

    // </div>
    <div className='container bg-img1'>
      <div className="row border shadow">
        <div className="col-lg-12">
          <h4>My Jobs</h4>
        </div>
     
     {/* <div className='col-lg-12 mt-5'>
        <table className='w-100 border rounded'>
          <thead>
            <tr>
              <th className=' fw-1 fs-6' style={{color:'#004F98'}}>Job Title</th>
              <th className=' fw-1 fs-6' style={{color:'#004F98'}}>Date Applied</th>
              <th className=' fw-1 fs-6' style={{color:'#004F98'}}>Status</th>
              <th className=' fw-1 fs-6' style={{color:'#004F98'}}>Job Title</th>
            </tr>
          </thead>
          <tbody>
           {
            userJobs?.length>0?
            userJobs?.map((item)=>(
              <tr className='mt-4  border shadow'>
              <td className='d-flex mt-2'>
            <div >
                  <img src={`${baseurl}/uploads/${item.profile}`} width={'100px'} height={'100px'} style={{borderRadius:'50%'}} alt="" />
  
            </div>              <p>
                <h4 className='ms-5' style={{fontWeight:'bold'}}>{item.jobTitle}</h4>
                <div className='d-flex ms-5'>
                  <h6 className='mt-4' style={{color:'yellowgreen'}}><i class="fa-solid fa-building"><span className='text-dark ms-2' >{item.name} </span></i></h6>
                  <h6 className='mt-4 ms-2' style={{color:'yellowgreen'}}><i class="fa-solid fa-briefcase"> <span className='text-dark ms-2'>{item.category}</span></i></h6>
                  <h6 className='mt-4 ms-3 ' style={{color:'yellowgreen'}}><i class="fa-solid fa-money-bill"><span className='text-dark'>{item.rates}  </span></i></h6>
                </div>
              </p>
              </td>
              <td>nmnbmnbm</td>
              <td>{item.status}</td>
              <td>nmnbmnbm</td>
  
            </tr>
            )):
            <p>No Applied Jobs</p>

           }
          </tbody>
        </table>
  
     </div> */}
     <div className='col-lg-12 mt-5'>
  <div className='table-responsive'>
    <table className='table w-100 border rounded'>
      <thead>
        <tr>
          <th className='fw-1 fs-6' style={{ color: '#004F98' }}>Job Title</th>
          <th className='fw-1 fs-6' style={{ color: '#004F98' }}>Date Applied</th>
          <th className='fw-1 fs-6' style={{ color: '#004F98' }}>Status</th>
          <th className='fw-1 fs-6' style={{ color: '#004F98' }}>Job Title</th>
        </tr>
      </thead>
      <tbody>
        {userJobs?.length > 0 ? (
          userJobs?.map((item) => (
            <tr className='mt-4 border shadow' key={item.id}>
 <td className='d-flex mt-2'>
            <div >
                  <img src={`${baseurl}/uploads/${item.profile}`} width={'100px'} height={'100px'} style={{borderRadius:'50%'}} alt="" />
  
            </div>              <p>
                <h4 className='ms-5' style={{fontWeight:'bold'}}>{item.jobTitle}</h4>
                <div className='d-flex flex-column flex-lg-row ms-5 ms-lg-0 text-center'>
                <h6 className='mt-4' style={{ color: ' #004F98' }}><i className="fa-solid fa-building"><span className='text-dark ms-2'>{item.name} </span></i></h6>
                <h6 className='mt-4 ms-2' style={{ color: ' #004F98' }}><i className="fa-solid fa-briefcase"> <span className='text-dark ms-2'>{item.category}</span></i></h6>
                <h6 className='mt-4 ms-3 ' style={{ color: ' #004F98' }}><i className="fa-solid fa-money-bill"><span className='text-dark'>{item.rates}  </span></i></h6>
            </div>

              </p>
              </td>
              <td>nmnbmnbm</td>
              <td>{item.status}</td>
              <td>nmnbmnbm</td>            </tr>
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
  )
}

export default ApplyStatus