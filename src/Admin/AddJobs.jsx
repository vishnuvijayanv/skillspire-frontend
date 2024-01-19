import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addJobsAPI } from '../Services/allApi';
import {useNavigate} from 'react-router-dom'
function AddJobs() {

  const navigate = useNavigate()

  const [project,setProject] = useState({
    title:"",
    category:"",
    image:"",
    description:"",
    skills:"",
    type:"",
    rates:""
  })
  console.log(project);


  const addJobs =async(e)=>{
    e.preventDefault()
    const {title,category,image,description,rates,skills,type} = project
    if (!title || !category || !image || !description || !rates || !skills || !type) {

      alert("Please Fill all the Details")
      
    }

    else{

      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("category",category)
      reqBody.append("image",image)
      reqBody.append("description",description)
      reqBody.append("rates",rates)

      reqBody.append("skills",skills)
      reqBody.append("type",type)


      const token = sessionStorage.getItem("token")
      console.log(token);
      
        const reqheader = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          console.log(reqheader);

      const result = await addJobsAPI(reqBody,reqheader)
      console.log(result);
      if (result.status === 200) {
        alert('Job Added SuccessFully')
        navigate('/employerHome')

        setProject({
          title:"",
          category:"",
          image:"",
          description:"",
          rates:"",
          rates:"",
          skills:"",
          type:""
        })
      }
      else{
        alert(result.response.data)                            
      }   
    }
  }

  return (
    <div className='row mt-5'>
      <div className="col-lg-2">
        <Sidebar/>
      </div>
      <div className="col-lg-6 ">
        <div>
          <h3 className='text-center'>Add Job</h3>
        <Form className='w-100 '>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" placeholder="Job Title" onChange={(e)=>setProject({...project,title:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Job Category</Form.Label>
        <Form.Select aria-label="Default select example"  onChange={(e)=>setProject({...project,category:e.target.value})}>
      <option>Select Catgory</option>
      <option value="Web Development">Web Development</option>
      <option value="Graphic Design">Graphic Design</option>
      <option value="Digital Marketting">Digital Marketting</option>
      <option value="Writing">Writing</option>

    </Form.Select>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file"  onChange={(e)=>setProject({...project,image:e.target.files[0]})}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}  onChange={(e)=>setProject({...project,description:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Skills Required</Form.Label>
        <Form.Control type="text" placeholder="Skills"  onChange={(e)=>setProject({...project,skills:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>rates</Form.Label>
        <Form.Control type="number" placeholder="rates"  onChange={(e)=>setProject({...project,rates:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Project Type</Form.Label>
        <Form.Select aria-label="Default select example"  onChange={(e)=>setProject({...project,type:e.target.value})}>
      <option>Select One</option>
      <option value="One-time Task">One-time Task</option>
      <option value="Ongoing Work">Ongoing Work</option>
      <option value="Micro Task">Micro Task</option>
    </Form.Select>

      </Form.Group>
      <Button variant="outline-success" onClick={addJobs}>Add Job</Button>{' '}
    </Form>
        </div>
      </div>
      <div className="col-lg-3">
          <h3 className='text-center'>Terms & Conditions</h3>
          <ul>
        <li><strong>Profile Completeness:</strong> Employers must complete their profiles with accurate and up-to-date information before adding jobs to the platform.</li>

        <li><strong>Verification:</strong> The platform may require identity verification for Employers to ensure the legitimacy of their accounts.</li>

        <li><strong>Accurate Job Information:</strong> Employers must provide accurate and truthful information when adding job listings to the platform.</li>

        <li><strong>Project Scope:</strong> Job descriptions must clearly outline the scope, requirements, and expectations for freelancers.</li>

        <li><strong>No Misleading Information:</strong> Employers must not post misleading or fraudulent job opportunities.</li>


        <li><strong>Termination of Inactive Accounts:</strong> Inactive admin accounts may be terminated to maintain the quality and relevance of job listings on the platform.</li>
    </ul>
        </div>

    </div>
  )
}

export default AddJobs