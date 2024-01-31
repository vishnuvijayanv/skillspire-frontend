import React, { useState,useEffect } from 'react'
import { Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { profileUpdateAPI } from '../Services/allApi';
import { baseurl } from '../Services/baseurl';
function Profile() {
  const [user ,setUser] = useState(true)
  const [preview,setPreview] = useState("")

  const [userData,setUserData] = useState({
    username:"",
    skills:"",
    rates:"",
    category:"",
    about:"",
    education:"",
    services:"",
    profile:"",
    phone:""
  })

  const [existingImage,setExistingImage] = useState("")

  useEffect(()=>{
    const logUser =  (JSON.parse(sessionStorage.getItem("existingUser")))

    setUserData({
      ...userData,
      username:logUser.firstName,
      skills:logUser.skills,
      rates:logUser.rates,
      category:logUser.category,
      about:logUser.about,
      education:logUser.education,
      services:logUser.services,
      profile:"",
      phone:logUser.phone


      
    })
    setExistingImage(logUser.profile)

  },[])
  console.log(userData);

  console.log(existingImage);


  useEffect(()=>{
    if (userData.profile) {(setPreview(URL.createObjectURL(userData.profile)))
    }
    else{
      setPreview("")
    }

  },[userData.profile])

  console.log(preview);

  const editProfile=()=>{
    setUser(false)
  }
  const saveProfile=async()=>{
    // setUser(true)
    const {skills,rates,category,about,education,services,profile,phone} = userData
    if (  !skills || !rates || !category ||  !about  || !education  || !services || !profile || !phone) {

      alert("please fill the form completely to continue")
      
    }
    else{
      const reqBody = new FormData()
      reqBody.append("skills",skills)
      reqBody.append("rates",rates)
      reqBody.append("category",category)
      reqBody.append("about",about)
      reqBody.append("education",education)
      reqBody.append("services",services)
      reqBody.append("profile",profile)
      const user=  (JSON.parse(sessionStorage.getItem("existingUser"))._id)
      console.log(user);
      reqBody.append("phone",phone)


      const token = sessionStorage.getItem("token")
        console.log(token);
          const reqheader = {
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`
            }

      const result = await profileUpdateAPI(user,reqBody,reqheader)
      console.log(result);
      if (result.status === 200) {
        console.log(result.data);
        sessionStorage.setItem("existingUser",JSON.stringify(result.data))
        alert("profile Updated successfully")
        setUser(true)
        
      }
    }
  }
  return (
    <div className='container mt-5 ' >



      <div className="row">
        <div className="col-lg-8" style={{ borderTop: '5px solid #00A7AC' }}>
          <div className="row  "  >
            <div className="col-lg-5 p-3">
            <label className=' d-flex justify-content-center mb-2' htmlFor="profile">

            <input id="profile" type="file" style={{display:'none'}}  onChange={(e)=>setUserData({...userData,profile:e.target.files[0]})}  />

            {
                existingImage == ""?
                <img width={'100%'} height={'200px'} src={preview?preview:`https://cdn4.iconfinder.com/data/icons/social-communication/142/add_photo-512.png`} className='justify-content-center' alt="" />:

                <img width={'100%'} height={'200px'} src={preview?preview:`${baseurl}/uploads/${existingImage}`} className='justify-content-center' alt="" />



                
              }
              </label>

              <h6 className='text-success mt-5'><i class="fa-solid fa-circle-dot"></i> I'm Online</h6>

              {user?
                <h5 className='mt-3 d-flex'><i class="fa-solid fa-location-dot "><p style={{textAlign:'justify'}}>{userData.education}</p></i></h5>
                :
                <Form className='w-100  '>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Education/Experience:</Form.Label>
                  <Form.Control className='border' as="textarea" rows={3}  value={userData.education} onChange={(e)=>setUserData({...userData,education:e.target.value})}/>
                </Form.Group>
              </Form>
                }
            </div>
            <div className="col-lg-7 p-3">
            {user?              
               <>
              <div className='d-flex justify-content-between'>
              
                  <h2 className='fw-bold'>{userData.username} </h2>
                  <button className='btn ' style={{backgroundColor:'#00A7AC'}} onClick={editProfile}><i class="fa-solid fa-plus"></i>Edit Profile</button>
                </div>
                <h3 className='mt-3 '>{userData.category}</h3>
              
                  <a className='mt-3 '>{userData.email}</a>
               </>:
                <Form className='w-100  '>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>UserName</Form.Label>
              <Form.Control className='border' type="text" placeholder="Company Name/Employer Name" value={userData.username} 
              onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select className='border' aria-label="Default select example"  value={userData.category} onChange={(e)=>setUserData({...userData,category:e.target.value})}>
            <option>Web Development</option>
            <option value="web development">Web Development</option>
            <option value="graphic design">Graphic Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </Form.Select>
          </Form.Group>
            </Form>}
              
              <div className='d-flex mt-4'>
                <div className=' d-flex'>
                      <span class="fa fa-star  text-secondary me-2"></span>
                      <span class="fa fa-star  text-secondary me-2"></span>
                      <span class="fa fa-star  text-secondary me-2"></span>
                      <span class="fa fa-star  text-secondary me-2"></span>
                      <span class="fa fa-star  text-secondary me-2"></span>
                  </div> 
                  <h5>0.0(0 reviews)</h5>
                  <h4 className='ms-5'><i class="fa-solid fa-circle-dollar-to-slot text-success me-3"></i>||||||||</h4>
              </div>

              <hr />
              <h3 >About Me</h3>
              {user?
              <p>{userData.about}</p>:
              <Form className='w-100 '>
             <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
               <Form.Control className='border' as="textarea" rows={3} value={userData.about} onChange={(e)=>setUserData({...userData,about:e.target.value})}/>
             </Form.Group>
           </Form>
              }


            </div>
          </div>
        </div>
        <div className="col-lg-4 ps-5 " style={{ borderTop: '5px solid #00A7AC' }}>
          {user?
          <div className='border shadow mt-2'>
            <h5 className='text-center fw-bold text-dark'>Other Informations</h5> 
            <hr />
            <h5 className="mb-3"><i class="fa-solid fa-phone text-primary ms-2 me-2 "></i>Phone<span style={{ float:'right',color:'grey' }}> 
            </span>{userData.phone}</h5>
            <h5 className="mb-3"><i class="fa-solid fa-envelope text-primary ms-2 me-2"></i>Email<span style={{ float:'right',color:'grey' }}> {userData.email}</span></h5>
            <h5 className="mb-3"><i class="fa-solid fa-money-bill-wave text-primary ms-2 me-2"></i>Charges<span style={{ float:'right',color:'grey' }}>{userData.rates}</span></h5>
          </div>:
          <div className='border shadow p-3'>
         <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control  className='border' type="text" placeholder="Phone Number" value={userData.phone}    onChange={(e)=>setUserData({...userData,phone:e.target.value})}/>
              </Form.Group>
              <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Rates</Form.Label>
              <Form.Control className='border' type="text" placeholder="Rates" value={userData.rates}    onChange={(e)=>setUserData({...userData,rates:e.target.value})}
 />
            </Form.Group>
         </Form>
        </div>
          }
          <div className='border shadow mt-5 p-3' >
            <h5 className='text-center fw-bold text-dark'>Services Offered</h5> 
            <hr />
           { user ?
           <p>{userData.skills}</p>:
           <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Skills</Form.Label>
              <Form.Control className='border' type="text" placeholder="Skills" value={userData.skills} onChange={(e)=>setUserData({...userData,skills:e.target.value})}
 />
            </Form.Group>
            <Button variant="contained" className='w-100 mt-3 ' style={{backgroundColor:'#00A7AC'}} onClick={saveProfile}>Save Profile</Button>

           </Form>

           }

            


          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile