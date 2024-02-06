import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Faq() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleToggle = (faqNumber) => {
    switch (faqNumber) {
      case 1:
        setOpen1(!open1);
        break;
      case 2:
        setOpen2(!open2);
        break;
      case 3:
        setOpen3(!open3);
        break;
      case 4:
        setOpen4(!open4);
        break;
      case 5:
        setOpen5(!open5);
        break;
      default:
        break;
    }
  };

  return (
    <div className='container Home-img p-5'>
      <div className="row">
        <div className="col-lg-6 mt-4">
          <h1 className='fw-bold'>Frequently Asked <br /> Questions</h1>
          <p className='mt-4 ' style={{ textAlign: 'justify' }}>Got More Questions. Feel Free To Contact Us For More Information.<br /> We Are Always At Your Service </p>

          <a className='p-2 mb-1' style={{ display: 'inline-block', border: '1px solid black', borderRadius: '25px', textDecoration: 'none', color: 'white', verticalAlign: 'middle', backgroundColor: '#00A7AC' }} href="/dashboard">
            Find Jobs
            <i style={{ border: '1px solid black', borderRadius: '25px', marginTop: '3px', marginLeft: '5px', padding: '5px', verticalAlign: 'middle', backgroundColor: 'white', color: 'black' }} className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-lg-6 mt-4">
          <div style={{ backgroundColor: '#00A7AC' }} className='border rounded mt-3'>
            <div className='d-flex justify-content-between border rounded p-3' >
              <h4 className='fw-bold d-flex justify-content-center align-items-center text-light'>What is Skillspire?</h4>
              <button onClick={() => handleToggle(1)} className='btn '><i className={`fa-solid text-light ${open1 ? 'fa-minus' : 'fa-plus'}`}></i></button>
            </div>
            <Collapse in={open1}>
              <div className='row justify-content-center' >
                <p className='text-light'>Answer: Skillspire is a freelance platform that connects skilled professionals with businesses and projects worldwide. It's a dynamic space where freelancers can showcase their talents and businesses can find the expertise they need.</p>
              </div>
            </Collapse>
          </div>


          <div style={{ backgroundColor: '#00A7AC' }} className='border rounded mt-3'>
            <div className='d-flex justify-content-between border rounded p-3' >
              <h4 className='fw-bold d-flex justify-content-center align-items-center text-light'>How do I get started on Skillspire?</h4>
              <button onClick={() => handleToggle(2)} className='btn '><i className={`fa-solid text-light  ${open2 ? 'fa-minus' : 'fa-plus'}`}></i></button>
            </div>
            <Collapse in={open2}>
              <div className='row justify-content-center' >
                <p className='text-light'>Answer: To get started on Skillspire, simply create a profile highlighting your skills, experience, and achievements. Once your profile is set up, you can browse and apply for freelance opportunities that match your expertise.</p>
              </div>
            </Collapse>
          </div>


          <div style={{ backgroundColor: '#00A7AC' }} className='border rounded mt-3'>
            <div className='d-flex justify-content-between border rounded p-3' >
              <h4 className='fw-bold d-flex justify-content-center align-items-center text-light'>What sets Skillspire apart from other freelance platforms?</h4>
              <button onClick={() => handleToggle(3)} className='btn '><i className={`fa-solid text-light  ${open3 ? 'fa-minus' : 'fa-plus'}`}></i></button>
            </div>
            <Collapse in={open3}>
              <div className='row justify-content-center' >
                <p className='text-light'>Answer: Skillspire stands out with its diverse talent ecosystem, seamless connectivity, and secure transactions. We bring together a wide range of freelancers, facilitate clear communication, and prioritize the security of every transaction.</p>
              </div>
            </Collapse>
          </div>

          <div style={{ backgroundColor: '#00A7AC' }} className='border rounded mt-3 '>
          <div className='d-flex justify-content-between border rounded p-3' >
            <h4 className='fw-bold d-flex justify-content-center align-items-center text-light'>Is Skillspire suitable for all types of freelancers?</h4>
            <button onClick={() => handleToggle(4)} className='btn '><i className={`fa-solid text-light  ${open4 ? 'fa-minus' : 'fa-plus'}`}></i></button>
          </div>
          <Collapse in={open4}>
            <div className='row justify-content-center' >
              <p className='text-light'>Answer: Yes, Skillspire welcomes freelancers from all industries and expertise areas. Whether you're a graphic designer, developer, writer, or marketing strategist, our platform provides opportunities for a diverse range of talents.</p>
            </div>
          </Collapse>
        </div>

        <div style={{ backgroundColor: '#00A7AC' }} className='border rounded mt-3 '>
          <div className='d-flex justify-content-between border rounded p-3' >
            <h4 className='fw-bold d-flex justify-content-center align-items-center text-light'>How does the payment process work on Skillspire?</h4>
            <button onClick={() => handleToggle(5)} className='btn '><i className={`fa-solid text-light 
            
            
            ${open5 ? 'fa-minus' : 'fa-plus'}`}></i></button>
          </div>
          <Collapse in={open5}>
            <div className='row justify-content-center' >
              <p className='text-light'>Answer: Skillspire ensures secure transactions between freelancers and clients. Once a project is completed, payments are processed promptly. Our platform prioritizes fair compensation and transparent financial transactions.</p>
            </div>
          </Collapse>
        </div>

        </div>
      </div>
    </div>
        
   
  )
}

export default Faq