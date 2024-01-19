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
    profile:""
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
    const {skills,rates,category,about,education,services,profile} = userData
    if (  !skills || !rates || !category ||  !about  || !education  || !services || !profile) {

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
    <div className='container'>

      <div className=" container row ">
      
        <div className="col-lg-3  border shadow m-3 p-2 rounded">
          <div className='d-flex justify-content-center align-items-center flex-column'>
          <label className=' d-flex justify-content-center mb-2' htmlFor="profile">
              <input id="profile" type="file" style={{display:'none'}}  onChange={(e)=>setUserData({...userData,profile:e.target.files[0]})}  />

              {
                existingImage == ""?
                <img width={'100%'} height={'200px'} src={preview?preview:`https://cdn4.iconfinder.com/data/icons/social-communication/142/add_photo-512.png`} className='justify-content-center' alt="" />:

                <img width={'100%'} height={'200px'} src={preview?preview:`${baseurl}/uploads/${existingImage}`} className='justify-content-center' alt="" />



                
              }
  
          </label>            {/* <input className='w-100  mt-3 h-5 ' type="text" value={"Vishnu"} readOnly />
            <input className='w-100  mt-3 ' type="text" value={"Vishnu"} readOnly />

            <input className='w-100  mt-3 ' type="text" value={"Vishnu"} readOnly />
            <input className='w-100  mt-3 ' type="text" value={"Vishnu"} readOnly />
            <input className='w-100  mt-3 ' type="text" value={"Vishnu"} readOnly /> */}
           {user?

          <>
             <h3>{userData.username}</h3>
  
              <h4>{userData.skills}</h4>
  
              <h4>{userData.rates}</h4>
              <h5>{userData.category}</h5>
  
              <Button variant="contained" className='w-100 mt-3' style={{backgroundColor:'yellowgreen'}} onClick={editProfile}>Edit Profile</Button>
          </>
            
            :
            <Form className='w-100 '>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="Company Name/Employer Name" value={userData.username} 
              onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" placeholder="Skills"    value={userData.skills}             onChange={(e)=>setUserData({...userData,skills:e.target.value})}
 />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rates</Form.Label>
              <Form.Control type="text" placeholder="Rates"            value={userData.rates}    onChange={(e)=>setUserData({...userData,rates:e.target.value})}
 />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example"  value={userData.category} onChange={(e)=>setUserData({...userData,category:e.target.value})}>
            <option>Web Development</option>
            <option value="web development">Web Development</option>
            <option value="graphic design">Graphic Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </Form.Select>
            </Form.Group>
            <Button variant="contained" className='w-100 mt-3' style={{backgroundColor:'yellowgreen'}} onClick={saveProfile}>Save Profile</Button>
          </Form>
}

            
          </div>
          
        </div>
        <div className="col-lg-8 border shadow m-3 p-2 rounded">

          {user?
            <div className='border shadow rounded p-3 m-4'>
              <h4>About Me</h4>
            <p style={{textAlign:'justify'}}>{userData.about}</p>
          </div>:
             <Form className='w-100 '>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>About Me</Form.Label>
               <Form.Control as="textarea" rows={3} value={userData.about} onChange={(e)=>setUserData({...userData,about:e.target.value})}/>
             </Form.Group>
           </Form>
          }

          <div className='row p-4 justify-content-center'>
           { user?
           <>
              <div className="col-lg-12 border shadow m-3 p-2 rounded">
                <h4>Education/Experience:</h4>
                <p className='w-100 ' style={{wordWrap:'break-word'}}>{userData.education}</p>
  
              </div>
              <div className="col-lg-12 border shadow m-3 p-2 rounded">
                <h4>Services Offered</h4>
                <p  style={{wordWrap:'break-word'}}>{userData.services}</p>
  
              </div>
            </>
            :
            <>
            <div className="col-lg-5 border shadow m-3 p-2 rounded">
            <Form className='w-100 '>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Education/Experience:</Form.Label>
               <Form.Control as="textarea" rows={3}  value={userData.education} onChange={(e)=>setUserData({...userData,education:e.target.value})}/>
             </Form.Group>
           </Form>
            </div>
            <div className="col-lg-5 border shadow m-3 p-2 rounded">
            <Form className='w-100 '>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Services Offered</Form.Label>
               <Form.Control as="textarea" rows={3}  value={userData.services}  onChange={(e)=>setUserData({...userData,services:e.target.value})} />
             </Form.Group>
           </Form>
            </div>
          </>}
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Profile