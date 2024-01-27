import React, { useState,useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { empUpdateAPI } from '../Services/allApi';
import { baseurl } from '../Services/baseurl';
function EmpProfile() {
  const[isEmp,setIsEmp] = useState(false)
  const [preview,setPreview] = useState("")

  const [userData,setUserData] = useState({
    uid:"",
    cname:"",
    category:"",
    about:"",
    phone:"",
    email:"",
    address:"",
    profile:"",
    termsnconditions:""
  })

  console.log(userData);


  console.log(userData);
  const [existingImage,setExistingImage] = useState("")

  useEffect(()=>{
    const logUser =  (JSON.parse(sessionStorage.getItem("existingUser")))

    setUserData({
      ...userData,
      uid:logUser._id,
      cname:logUser.firstName,
      category:logUser.category,
      about:logUser.about,
      phone:logUser.phone,
      email:logUser.email,
      address:logUser.address,
      profile:"",
      termsnconditions:logUser.termsnconditions

      
    })
    setExistingImage(logUser.profile)

  },[])



  useEffect(()=>{
    if (userData.profile) {(setPreview(URL.createObjectURL(userData.profile)))
   
    }
    else{
      setPreview("")
    }

  },[userData.profile])



const empProfileUpdate = async(e)=>{
  e.preventDefault()
  const{uid,cname,category,about,phone,email,address,profile,termsnconditions} = userData
  if (!cname || !category || !about || !phone || !email || !address || !profile || !termsnconditions) {
    alert("please fill all details to update")
  }
  else{
    const reqBody = new FormData()

    reqBody.append("firstName",cname)
    reqBody.append("email",email)
    reqBody.append("category",category)
    reqBody.append("about",about)
    reqBody.append("profile",profile)
    reqBody.append("address",address)
    reqBody.append("phone",phone)
    reqBody.append("termsnconditions",termsnconditions)

    console.log(reqBody);
    // setIsEmp(false)


  const token = sessionStorage.getItem("token")
        console.log(token);
  const reqheader = {
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
  const result = await empUpdateAPI(uid,reqBody,reqheader)
  console.log(result);
  if (result.status === 200) {
    console.log(result.data);
    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    console.log(userData);
    alert("profile Updated successfully")
 
  }
  else{
    console.log(result.response.data);
  }
}
}





  // const saveProfile = ()=>{
  //   setIsEmp(false)

  // }
  const profileUpdate  = ()=>{
    setIsEmp(true)
  }
  return (
    <div className='row ' >
        <div className="col-lg-2">
            <Sidebar/>
        </div>
        <div className="col-lg-9 border shadow rounded home-bgimg ms-5" >
          <div className="row">
            <div className="col-lg-5 p-5">
            {isEmp?
              <>
              <label className=' d-flex justify-content-center mb-2' htmlFor="profile">
              <input id="profile" type="file" style={{display:'none'}} onChange={(e)=>setUserData({...userData,profile:e.target.files[0]})} />
              <img width={'50%'} height={'200px'} src={preview?preview:`https://cdn4.iconfinder.com/data/icons/social-communication/142/add_photo-512.png`} className='justify-content-center' alt="" />
  
              </label>
  
          <Form className='w-100 '>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Company Name/Employer Name</Form.Label>
          <Form.Control className='border rounded' type="text" placeholder="Company Name/Employer Name" value={userData.cname} onChange={(e)=>setUserData({...userData,cname:e.target.value})} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category</Form.Label>
          <Form.Select className='border rounded' aria-label="Default select example" onChange={(e)=>setUserData({...userData,category:e.target.value})}>
        <option>Web Development</option>
        <option value="Web Development">Web Development</option>
        <option value="Graphic Design">Graphic Design</option>
        <option value="Three">Three</option>
      </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control className='border rounded' as="textarea" rows={3} onChange={(e)=>setUserData({...userData,about:e.target.value})}/>
        </Form.Group>
  
          </Form>
            </>:
            
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={`${baseurl}/uploads/${existingImage}`} />
        <Card.Body>
          <Card.Title className=' text-center d-flex flex-column fw-bold '>
           {userData.cname}
            </Card.Title>
          <h4>Category:<span style={{float:'right'}}>{userData.category}</span></h4>
          <Card.Text style={{textAlign:'justify'}}>
           {userData.about}
          </Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Phone:<span  style={{float:'right'}}>{userData.phone}</span></ListGroup.Item>
          <ListGroup.Item>Email:<span  style={{float:'right'}}>{userData.email}</span></ListGroup.Item>
          <ListGroup.Item>Address:<span  style={{float:'right'}}>{userData.address}</span></ListGroup.Item>
        </ListGroup>
        
        </Card.Body>

      </Card>

  }
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 ">
             { isEmp?
             <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control className='border rounded' type="text" placeholder="Company Name/Employer Name"onChange={(e)=>setUserData({...userData,phone:e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control className='border rounded' type="text" placeholder="Email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control className='border rounded' as="textarea" rows={3} onChange={(e)=>setUserData({...userData,address:e.target.value})}   />
      </Form.Group>
              <h3 className='text-center mt-5'>Terms and Conditions:</h3>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Terms & Conditions</Form.Label>
        <Form.Control className='border rounded' as="textarea" rows={3} onChange={(e)=>setUserData({...userData,termsnconditions:e.target.value})}/>
      </Form.Group>
<center>
        <Button className=' btn btn-success text-white border rounded' variant="outline-success w-75" onClick={empProfileUpdate}>Update</Button>{' '}
  
</center>
              </Form>:
                  
               <>
                    <h3 className='text-center'>Terms & Conditions</h3>
                    <ul>
                  <li><strong>Profile Completeness:</strong> Employers must complete their profiles with accurate and up-to-date information before adding jobs to the platform.</li>
          
                  <li><strong>Verification:</strong> The platform may require identity verification for Employers to ensure the legitimacy of their accounts.</li>
          
                  <li><strong>Accurate Job Information:</strong> Employers must provide accurate and truthful information when adding job listings to the platform.</li>
          
                  <li><strong>Project Scope:</strong> Job descriptions must clearly outline the scope, requirements, and expectations for freelancers.</li>
          
                  <li><strong>No Misleading Information:</strong> Employers must not post misleading or fraudulent job opportunities.</li>
          
          
                  <li><strong>Termination of Inactive Accounts:</strong> Inactive admin accounts may be terminated to maintain the quality and relevance of job listings on the platform.</li>
              </ul>
<center>
                <Button variant="contained" className='w-50 mt-3' style={{backgroundColor:'wheat'}} onClick={profileUpdate}>Update Profile</Button>
  
</center>               </>
                }


            </div>
          </div>
        </div>
    </div>
  )
}

export default EmpProfile