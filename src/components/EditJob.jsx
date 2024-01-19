import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { baseurl } from '../Services/baseurl';
import { jobUpdate, jobUpdateAPI } from '../Services/allApi';
import { EditJobResponseContext, ediJobResponseContext } from '../context/ContextShare';
function EditJob({jobData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [jobDetails,setJobDEtails]=useState({
        id:jobData._id,
        title:jobData.title,
        category:jobData.category,
        image:"",
        description:jobData.description,
        skills:jobData.skills,
        type:jobData.type,
        rates:jobData.rates
    })

    const {editJobResponse,setEditJobResponse} = useContext(EditJobResponseContext)

    const [preview,setPreview] = useState("")

    const handleClose1 =()=>{
        setJobDEtails({
            id:jobData._id,

            title:jobData.title,
            category:jobData.category,
            image:"",
            description:jobData.description,
            skills:jobData.skills,
            type:jobData.type,
            rates:jobData.rates
            })
           setPreview("")
       }


       useEffect(()=>{
        if (jobDetails.image) {
            setPreview(URL.createObjectURL(jobDetails.image))  
        }
      },[jobDetails.image])

const handleUpdate=async()=>{
    const {id,title,category,image,description,skills,type,rates}= jobDetails
    if (!id || !title || !category || !image || !description || !skills || !type || !rates) {
        alert("please fill the form completly")
        
    }
    else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("category",category)
        preview?reqBody.append("image",image):reqBody.append("image",jobData.image)
        reqBody.append("description",description)
        reqBody.append("rates",rates)
        reqBody.append("skills",skills)
        reqBody.append("type",type)

        const token = sessionStorage.getItem("token")
        console.log(token);

         if (preview) {
        const reqheader = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          const result = await jobUpdateAPI(id,reqBody,reqheader)
          console.log(result);
          if(result.status==200){
            alert('Updation Successfull')
            setEditJobResponse(result.data)

            handleClose()
          }
          else{
            console.log(result.response.data);
          }


        }
        else{
            const reqheader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
              }
              const result = await jobUpdateAPI(id,reqBody,reqheader)
              console.log(result);
              if(result.status==200){
                alert('Updation Successfull')
                setEditJobResponse(result.data)

    
                handleClose()
              }
              else{
                console.log(result.response.data);
              }
    
        }

    }
}



  return (
    <>
        <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal

        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                <label className=' d-flex justify-content-center mb-2' htmlFor="profile">
              <input id="profile" type="file" style={{display:'none'}} onChange={(e)=>setJobDEtails({...jobDetails,image:e.target.files[0]})}/>
              <img width={'100%'}  src={preview?preview:`${baseurl}/uploads/${jobData.image}`} className='justify-content-center' alt="" />
              </label>
              <Form className='mt-5'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}  value={jobDetails.description}  onChange={(e)=>setJobDEtails({...jobDetails,description:e.target.value})} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Skills Required</Form.Label>
        <Form.Control type="text" placeholder="Skills"  value={jobDetails.skills} onChange={(e)=>setJobDEtails({...jobDetails,skills:e.target.value})} />
      </Form.Group>

      
              </Form>

                </div>



                <div className="col-lg-6">
                <Form className='w-100 '>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" placeholder="Job Title" value={jobDetails.title} onChange={(e)=>setJobDEtails({...jobDetails,title:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Job Category</Form.Label>
        <Form.Select value={jobDetails.category} aria-label="Default select example" onChange={(e)=>setJobDEtails({...jobDetails,category:e.target.value})}>
      <option>Select Catgory</option>
      <option value="Web Development">Web Development</option>
      <option value="Graphic Design">Graphic Design</option>
      <option value="Digital Marketting">Digital Marketting</option>
      <option value="Writing">Writing</option>

    </Form.Select>
      </Form.Group>

    

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Project Type</Form.Label>
        <Form.Select aria-label="Default select example" value={jobDetails.type} onChange={(e)=>setJobDEtails({...jobDetails,type:e.target.value})}>
            
      <option>Select One</option>
      <option value="One-time Task">One-time Task</option>
      <option value="Ongoing Work">Ongoing Work</option>
      <option value="Micro Task">Micro Task</option>
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>rates</Form.Label>
        <Form.Control type="number" placeholder="rates" value={jobDetails.rates}  onChange={(e)=>setJobDEtails({...jobDetails,rates:e.target.value})}/>
      </Form.Group>

</Form>
                </div>
            </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Edit</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default EditJob