import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { baseurl } from '../Services/baseurl';
import { statusUpdate } from '../Services/allApi';
import { jobRequestContext } from '../context/ContextShare';
function JobModal({data}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {jobReqStatus,setJobReqStatus} = useContext(jobRequestContext)
    const [applies,setApplies] = useState({
      userID:data.userID,
      name:data.name,
      email:data.email,
      skills:data.skills,
      jobTitle:data.jobTitle,
      category:data.category,
      rates:data.rates,
      profile:data.profile,
      jobDesc:data.jobDesc,
      status:""
    })
console.log(applies);

    const statusAccept = async()=>{
      setApplies({
        userID:data.userID,
        jobID:data.jobID,
        name:data.name,
        email:data.email,
        skills:data.skills,
        jobTitle:data.jobTitle,
        category:data.category,
        rates:data.rates,
        profile:data.profile,
        jobDesc:data.jobDesc,
        status:"Accepted",
        time:data.time
      })
      const id = data._id
      console.log(id);

      const token = sessionStorage.getItem("token")
        console.log(token);
        const reqheader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
      console.log(applies);

      const result = await statusUpdate(id,applies,reqheader)
      console.log(result);
      setJobReqStatus(result.data)
      handleClose()

    }

    const statusReject = async ()=>{
      setApplies({
        userID:data.userID,
        name:data.name,
        email:data.email,
        skills:data.skills,
        jobTitle:data.jobTitle,
        category:data.category,
        rates:data.rates,
        profile:data.profile,
        jobDesc:data.jobDesc,
        status:"Rejected"
      })
      console.log(applies);
      const id = data._id
      console.log(id);

      const token = sessionStorage.getItem("token")
        console.log(token);
        const reqheader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
      console.log(applies);

      const result = await statusUpdate(id,applies,reqheader)
      console.log(result);
      setJobReqStatus(result.data)
      handleClose()


    }

    

  return (
    <div>  <>
    <Button variant="light" onClick={handleShow}>
    <i class="fa-solid fa-ellipsis"></i>
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
            <div className="col-lg-3"><img src={`${baseurl}/uploads/${data.profile}`} width={'100px'} height={'100px'} style={{borderRadius:'50%'}} alt="" />
        </div>
            <div className="col-lg-9 d-flex flex-column">

              <h5 className='fw-bold'>{data.name}</h5>

              <div className='d-flex'>
                <p style={{fontSize:'14px',color:'aqua'}}>{data.category}</p>
                <p><i class="fa-solid fa-money-bill-1-wave text-success ms-3 me-2"></i>{data.rates}</p>

              </div>

              <div className='d-flex'>
                <Button  style={{width:'50px',height:'30px' , overflow:'hidden'}} className='  bg-light  text-dark me-3 d-flex justify-content-center align-items-center' onClick={statusReject}>
                <i class="fa-solid fa-x"></i>
        </Button>
        <Button onClick={statusAccept}  style={{width:'50px',height:'30px', overflow:'hidden'}}  className=' text-dark d-flex justify-content-center align-items-center'><i class="fa-solid fa-check"></i> </Button></div>
              
              {
                data?.status == "pending"?
                <h4>Status <span className='text-warning'>{data.status}</span></h4>:
                data?.status == "Rejected"?
                <h4>Status <span className='text-danger'>{data.status}</span></h4>:
                data?.status == "Accepted"?

                <h4>Status <span className='text-success'>{data.status}</span></h4>:
                <p>null</p>



              }



                {/* <div className='mt-3  d-flex'>
                    <span class="fa fa-star checked fa-2x "></span>
                    <span class="fa fa-star checked fa-2x "></span>
                    <span class="fa fa-star checked fa-2x "></span>
                    <span class="fa fa-star fa-2x "></span>
                    <span class="fa fa-star fa-2x "></span>
                </div> */}
            </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button  className=' btn btn-danger bg-danger text-light' onClick={statusReject}>
          Reject
        </Button>
        <Button onClick={statusAccept} variant="success" className='bg-success text-light'>Accept </Button>
      </Modal.Footer> */}
    </Modal>
  </></div>
  )
}

export default JobModal