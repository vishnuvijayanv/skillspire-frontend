import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {  Link } from 'react-router-dom'
import { RadioGroup,Radio,FormControlLabel,FormLabel,FormControl } from '@mui/material';
import { loginAPI, registerAPI } from '../Services/allApi';
import {useNavigate} from 'react-router-dom'


function Login({register}) {
    const registerForm = register?true:false
    const [logData,setLogData] = useState(
      {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        uType:""

      }
    )
console.log(logData);

const navigate = useNavigate()

const registerFn = async(e)=>{
  e.preventDefault()


  const {firstName,lastName,email,password,confirmPassword,uType} = logData
  if (!firstName || !lastName || !email || !password || !confirmPassword || !uType) {
    alert("Please fill the Form Complteley to Continue")
    console.log(logData);
    
  }
  else{
    const result = await registerAPI(logData)
    console.log(result);
    if (result.status==200) {
      alert(`successfully registered`)
      setLogData({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        uType:""

      })


      //navigate to login

      navigate('/login')
  }
  else{
    alert(result.response.data)
  }

}

}

const loginfn = async(e)=>{
  e.preventDefault()
  const {email,password,confirmPassword} = logData
  if ( !email || !password  || !confirmPassword) {
      alert('please fill all details')
      
  }
  else{
      const result = await loginAPI(logData)
      console.log(result);
      if (result.status===200) {
          alert("Login Successfull")
          setLogData({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            uType:""
    
          })

          console.log(logData);
          //session storing for store data
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.existUser))
          sessionStorage.setItem("token",result.data.token)


          if (result.data.existUser.uType === "Employer") {
            navigate('/employerHome')
            
          }
          else{
            navigate('/dashboard')
          }

          //navigate to login
          // setTimeout(()=>{
          //     navigate('/')

          // },2500)

         
      }
      else{
          
          alert(result.response.data)
      }

  }



}
  return (
    <div  className='container d-flex justify-content-center align-items-center ' style={{height:'750px'}} >
        <div className="col-lg-4"></div>
        <div className="col-lg-4 border bg-light rounded p-3 ">
            <h3><span style={{color:'yellowgreen'}}>Skill</span>Spire</h3>
            <hr style={{color:'white'}} />

        { registerForm&&
        <div className='d-flex mb-4  '>
         <TextField id="outlined-basic" className='me-2' label="First Name" variant="outlined" onChange={(e)=>setLogData({...logData,firstName:e.target.value})} />
         <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>setLogData({...logData,lastName:e.target.value})} />
         </div>}
         <TextField id="outlined-basic" className='me-2 w-100 mb-4' label="Email" variant="outlined" onChange={(e)=>setLogData({...logData,email:e.target.value})} />
         <TextField type='password' id="outlined-basic" className='me-2 w-100 mb-4' label="Password" variant="outlined" onChange={(e)=>setLogData({...logData,password:e.target.value})} />
         <TextField type='password' id="outlined-basic" className='me-2 w-100 mb-4' label="Confirm Password" variant="outlined" onChange={(e)=>setLogData({...logData,confirmPassword:e.target.value})} />
         
         {registerForm?
        <>
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">I am an...</FormLabel>
  <RadioGroup
  onChange={(e)=>setLogData({...logData,uType
    :e.target.value})}
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Employee"
    name="radio-buttons-group"
    row
  >
    <FormControlLabel value="Employee"  control={<Radio />} label="Employee"  />
    <FormControlLabel value="Employer" control={<Radio />} label="Employer"  />
  </RadioGroup>
</FormControl>
             <Button variant="contained" className='w-100' style={{backgroundColor:'yellowgreen'}} onClick={registerFn}>Register</Button>
             <hr style={{color:'white'}} />
             <p className='mt-2 text-center' >Already A User? Click Here To <Link to={'/login'}>Login</Link></p>
        </>
         :
         <>
             <Button variant="contained" className='w-100' style={{backgroundColor:'yellowgreen'}} onClick={loginfn}>Login</Button >
            <hr style={{color:'white'}} />
             <p className='mt-2 text-center' >Dont Have An Account? Click Here To <Link to={'/register'}>Register</Link></p>
         </>}



        </div>
        <div className="col-lg-4"></div>

    </div>
  )
}

export default Login