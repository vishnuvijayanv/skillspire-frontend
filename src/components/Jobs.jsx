import React from 'react'
import Sidebar from './Sidebar'
import Table from 'react-bootstrap/Table';
function Jobs() {
  return (
    <div className='row'>
        <div className="col-lg-2">
            <Sidebar/>
        </div>
        <div className="col-lg-10 ">
          <div className="row justify-content-evenly mt-3">
          <div className="col-lg-3 border shadow p-5 me-2">
            <h3 className='text-center'><i class="fa-solid fa-clipboard-list me-2"></i>No Of Jobs</h3>
            <h1 className='text-center'>264</h1>
          
          </div>
          <div className="col-lg-3 border shadow p-5">
          <h3 className='text-center'><i class="fa-solid fa-people-group me-2 "></i>Freelancer Collaborations</h3>
          <h1 className='text-center'>264</h1>


 
          </div>
          <div className="col-lg-3 border shadow p-5">
          <h3 className='text-center'><i class="fa-solid fa-comment me-2"></i>User Request</h3>
          <h1 className='text-center'>264</h1>

          </div>

          </div>
          <div className="row m-5">
            <div className="col-lg-12">
            <Table striped bordered hover shadow>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Jobs