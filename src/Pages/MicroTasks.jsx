import React from 'react'
import banner from '../Images/Cream Illustrative Digital Marketing Banner.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function MicroTasks() {
  return (
    <div >
      <div className='container mt-5 d-flex justify-content-center align-items-center'>
        <img src={banner} width={'100%'} alt="" />
      </div>
       <div className="container mt-5">
       <div className="row ">
            <div className="col-lg-3 mb-3"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.mdKJwxRwCN2eGwRGig4l6wHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
      </Card.Body>
    </Card></div>
    </div>
       </div>
    </div>
  )
}

export default MicroTasks