import React from 'react'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

function Home() {
  return (
    <div
    >
   
     <div className='container' style={{backgroundImage:'https://coolbackgrounds.io/images/backgrounds/white/white-unsplash-9d0375d2.jpg'}}>
         <div className='container d-flex justify-content-center align-items-center'>
           {/* <img src={homeimg} width={'100%'} height={'auto'} alt="" /> */}
           </div>
  
         <div className='d-flex justify-content-center  align-items-center border rounded mt-5 flex-column ' >
         <p className='fw-bold  w-75 text-center mt-5' style={{fontSize:'35px',textAlign:'justify'}}>"<span style={{color:'yellowgreen'}}>Skill</span><span style={{color:'black'}}>Spire</span> Freelance: Empowering Your Success. Unlock limitless opportunities and showcase your skills on our dynamic freelance platform, where talent meets opportunity."</p>
         <div className='d-flex justify-content-center align-items-center mb-3' style={{marginTop:'50px'}} >
         
         <Link to={'/login'} className='btn btn-light border-dark me-5 fw-bold' style={{color:'yellowgreen'}}>Hire An Employee </Link>
          <Link  to={'/login'}  className='btn fw-bold' style={{backgroundColor:'yellowgreen',color:'white'}}>Work As A FreeLancer</Link>
         </div>
         
       </div>
         </div>
          
  
        

       <div className=' container d-flex justify-content-center align-items-center flex-column mt-5'>
        <h4 style={{color:'yellowgreen'}}>FLEXIBLE SCHEDULE</h4>
        <h1 className='text-center fw-bold '>Work from anywhere, anytime.</h1>
        <h5 className='text-center ' style={{textAlign:'justify '}}>Enjoy the safety & flexibility of working with skill<span style={{color:'yellowgreen'}}>spire</span>. All you need is a computer & internet.</h5>
        <img className='mt-4 bordered rounded' src="https://assets-global.website-files.com/5e6035eb6aea331e9e880fa0/60f04ef30d401a2cc46450a7_iStock-1273803180%201.png" width={'75%'} alt="" />
       </div>

       <div className=' container d-flex justify-content-center align-items-center flex-column mt-5'>
        <h4 style={{color:'yellowgreen'}}>Your Gateway to Freelance Success</h4>
        <h1 className='text-center fw-bold '>Freelance with Skill<span style={{ color: 'yellowgreen' }}>spire</span></h1>
        <h5 className='text-center ' style={{textAlign:'justify '}}>Unlock opportunities and showcase your skills on Skill<span style={{ color: 'yellowgreen' }}>spire</span></h5>
       </div>


       <div className='container'>
         <div  className=' container row mt-5 '>
         <div className="col-lg-6">
          <h1>24k Talented people are getting Jobs</h1>
          <p className='mt-5' style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad impedit quos rem veniam cum, deleniti voluptatibus, adipisci qui libero blanditiis alias deserunt! Dolore ullam sint esse odio voluptate nulla tempore.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa nobis neque? Perspiciatis veritatis aspernatur harum similique officia non molestias iure ut libero. Autem quia, quasi provident recusandae repellat alias.</p>
          <Button variant="contained" className='w-100 mt-5' style={{backgroundColor:'yellowgreen'}}>Login</Button >

         </div>
          <div className="col-lg-6">
            <img src="https://assets.entrepreneur.com/content/3x2/2000/20200430193917-GettyImages-1186947989.jpeg" width={'100%'} alt="" />
  
          </div>

          
  
         </div>
       </div >

       <div className='mt-5 container'>
        <Rating/>
       </div>
    </div>
  )
}

export default Home