import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {  userJobsViewAPI } from '../Services/allApi';
import { useEffect,useState } from 'react';
import { baseurl } from '../Services/baseurl';
import '../App.css';
import Header from '../components/Header';

function Dashboard() {
const [allJobs,setAllJobs] = useState({})
const [searchKey,setSearchKey] = useState("")
console.log(searchKey);


  const getAllJob = async()=>{
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      console.log(token);
      const reqheader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    const result = await userJobsViewAPI(searchKey,reqheader)
    console.log(result);
    setAllJobs(result.data)
  }
}
  useEffect(()=>{
    getAllJob()
  },[searchKey])
   
  return (
  <>
     <div style={{backgroundColor:"#f0ffff"}} className='bg-img'>
        <div className='container  mt-5 ' >
          <div className="row">
           
            <div className="col-lg-12">
              <div className="row" >
                
                <div className="col-lg-6 " >
                  <h2  >Welcome To Skill<span style={{color:' #004F98'}}>Spire</span> </h2>
                  <p className='mt-5'>"SkillSpire is not just a freelance platform; it's a vibrant community where individual skills blossom into meaningful projects. As a freelancer, find your haven here, where opportunities abound, connections thrive, and your potential is unleashed. Join SkillSpire to embark on a journey where your talents are celebrated, and your freelance aspirations find the perfect platform to flourish."</p>
                  <div class="input-group mb-3 mt-5 border border-dark" style={{ borderRadius: '50px' }}>
                    <input type="text" class="form-control" aria-label="" placeholder='Enter to Search' onChange={(e)=>setSearchKey(e.target.value)}/>
                    <span class="input-group-text"><i className="fas fa-search me-2"></i></span>
                  </div>
    
            
                </div>
                <div className="col-lg-6 " >
                <Carousel >
                  <Carousel.Item interval={1000} >
                  <img   src="https://cdn.searchenginejournal.com/wp-content/uploads/2016/04/freelancersecrets.jpg" height={'400px'} width={'100%'} alt="" />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                  <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/02/22123618/landing-first-client-1024x512.png" height={'400px'} width={'100%'} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src="https://th.bing.com/th/id/R.f86691e7d80e9f8283daeaacc91f8676?rik=ltO54h8O5XCclQ&riu=http%3a%2f%2fwhatyourbossthinks.com%2fwp-content%2fuploads%2f2016%2f04%2fbe-your-own-boss.jpeg&ehk=bKyIa8f4ZYg3SO7NqWKyN%2bK0DSEarDvy9HHCrdHhL4E%3d&risl=&pid=ImgRaw&r=0" height={'400px'} width={'100%'} alt="" />
                  </Carousel.Item>
                </Carousel>
    
                </div>
              </div>
              <div className="row mt-5 ">
                <h1 className='text-center mb-2 fw-bold'>Available Works</h1>
                <h5  className='text-center mb-4 text-secondary'>400+ Jobs Available</h5>
  
    
              {allJobs?.length>0?
              allJobs?.map((item)=>(
                <div className="col-lg-3 mb-3 d-flex justify-content-center d-flex justify-content-center ">
                <Link  style={{ textDecoration:'none'}} to={`/jobdetails/${item._id}`}>
                    <Card className='job-card border-rounded' style={{ width: '18rem' ,height:'26rem',borderRadius:'20px'  ,textDecoration:'none'}}>
                      <Card.Img variant="top" className='job-image ' height={'170px'} src={`${baseurl}/uploads/${item.image}`} />
                      <Card.Body>
                        <Card.Title className='card-title fw-bold job-title' style={{color:'black', textDecoration:'none'}}>{item.title}</Card.Title>
                        <Card.Text className=' job-description'  style={{ textDecoration:'none'}}>
                          {item.description.slice(0, 100)}....
                        </Card.Text>
                        <Card.Text  className='job-data' style={{ textDecoration:'none'}}>
                          Skills : {item.skills}
                        </Card.Text>
                        <Card.Text  className='job-data'  style={{ textDecoration:'none'}}>
                          Salary : {item.rates}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Link>
                </div>
              )):
              <p className='text-danger'>Nothing To Display</p>
    
              }
    
               
              </div>
            </div>
            {/* <div className="col-lg-4"></div> */}
          </div>
        </div>
     </div>
  </>
  )
}

export default Dashboard