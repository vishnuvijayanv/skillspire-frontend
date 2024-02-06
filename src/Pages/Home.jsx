import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

function Home() {
  return (
    <div >
   
     <div className='container Home-img' >
         <div className='container d-flex justify-content-center align-items-center'>
           {/* <img src={homeimg} width={'100%'} height={'auto'} alt="" /> */}
           </div>
  
         <div className='d-flex justify-content-center  align-items-center  mt-5 flex-column ' >
         <p className='fw-bold  w-75 text-center mt-5' style={{fontSize:'35px',textAlign:'justify'}}>"<span style={{color:' #00A7AC'}}>Skill</span><span style={{color:'black'}}>Spire</span> Freelance: Empowering Your Success. Unlock limitless opportunities and showcase your skills on our dynamic freelance platform, where talent meets opportunity."</p>
         <div className='d-flex justify-content-center align-items-center mb-3' style={{marginTop:'50px'}} >
         
         <Link to={'/login'} className='btn btn-light border-dark me-5 fw-bold' style={{color:' #00A7AC'}}>Hire An Employee </Link>
          <Link  to={'/login'}  className='btn fw-bold ' style={{color:'white',backgroundColor:'#00A7AC'}}>Work As A FreeLancer</Link>
         </div>
         
       </div>
         </div>
          
  
        

       <div className=' container d-flex justify-content-center align-items-center flex-column mt-5'>
        <h4 style={{color:' #00A7AC'}}>FLEXIBLE SCHEDULE</h4>
        <h1 className='text-center fw-bold '>Work from anywhere, <span style={{color:'#00A7AC'}}>anytime</span>.</h1>
        <h5 className='text-center ' style={{textAlign:'justify '}}>Enjoy the safety & flexibility of working with skill<span style={{color:' #00A7AC'}}>spire</span>. All you need is a computer & internet.</h5>
        <img className='mt-4 bordered rounded' src="https://assets-global.website-files.com/5e6035eb6aea331e9e880fa0/60f04ef30d401a2cc46450a7_iStock-1273803180%201.png" width={'75%'} alt="" />
       </div>

       <div className="container mt-5 b">
       <h1 className='text-center'>Jobs <span style={{color:'#00A7AC'}}>Category</span> List</h1>
       <h5 className='text-center'>To choose your trending job dream & to make future bright.</h5>

        <div className="row mt-5  justify-content-evenly">
        <div className="col-lg-2 mini-card p-4 border shadow  mb-2  mb-2" style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Content Writing</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2 " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Technology</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2  " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'> Marketing</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2  " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Finance&Account</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2  " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Designing</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
        </div>
        <div className="row mt-5  justify-content-evenly" style={{overflowY:'hidden'}}>
        <div className="col-lg-2 mini-card p-4 border shadow  mb-2  " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Videography</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2 " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Creative Arts</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2  " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Translation</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2  " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Architecture</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
          <div className="col-lg-2 mini-card p-4 border shadow  mb-2  " style={{height:'200px'}}>
            <h4 className='text-center fw-bold'>Architecture</h4>
            <h6 className='text-center mt-3'>50 Jobs Available</h6>
            <h5 className='text-center mt-5'><a style={{textDecoration:'none',color:'#00A7AC'}} href="">View Jobs</a></h5>

          </div>
        </div>
       </div>

       <div className=' container d-flex justify-content-center align-items-center flex-column mt-5 '>
        <h4 style={{color:'#00A7AC'}}>Your Gateway to Freelance Success</h4>
        <h1 className='text-center fw-bold '>Freelance with Skill<span style={{color:'#00A7AC'}}>spire</span></h1>
        <h5 className='text-center ' style={{textAlign:'justify '}}>Unlock opportunities and showcase your skills on Skill<span style={{color:'#00A7AC'}}>spire</span></h5>
       </div>

       


       <div className='container '>
         <div  className=' container row mt-5 Home-img'>
         <div className="col-lg-6">
          <h1>24k Talented people are getting Jobs</h1>
          <p className='mt-5' style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad impedit quos rem veniam cum, deleniti voluptatibus, adipisci qui libero blanditiis alias deserunt! Dolore ullam sint esse odio voluptate nulla tempore.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa nobis neque? Perspiciatis veritatis aspernatur harum similique officia non molestias iure ut libero. Autem quia, quasi provident recusandae repellat alias.</p>
          <Link to={'/login'}  variant="contained" className='btn w-100 mt-5 mb-3' style={{backgroundColor:'#00A7AC'}}>Login</ Link>

         </div>
          <div className="col-lg-6">
            <img src="https://assets.entrepreneur.com/content/3x2/2000/20200430193917-GettyImages-1186947989.jpeg" width={'100%'} alt="" />
          </div>
         </div>
       </div >
       

       {/* <div className='mt-5 container'>
        <Rating/>
       </div> */}
    </div>
  )
}

export default Home