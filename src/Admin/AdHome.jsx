import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { deleteJobAPI, userJobsView } from '../Services/allApi';
import Collapse from 'react-bootstrap/Collapse';
import { baseurl } from '../Services/baseurl';
import EditJob from '../components/EditJob';
import { EditJobResponseContext } from '../context/ContextShare';

function AdHome() {
  const [allJobs, setAllJobs] = useState({});
  const [openRows, setOpenRows] = useState({}); // State to track open/closed status for each row
const{editJobResponse,setEditJobResponse} = useContext(EditJobResponseContext)
  const getAllJob = async () => {
    const token = sessionStorage.getItem('token');
    const reqheader = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const result = await userJobsView(reqheader);
    console.log(result);
    setAllJobs(result.data);
    // Initialize the openRows state based on the number of rows
    const initialOpenRows = {};
    result.data.forEach((item) => {
      initialOpenRows[item._id] = false;
    });
    setOpenRows(initialOpenRows);
  };
console.log(editJobResponse);
  useEffect(() => {
    getAllJob();
  }, [editJobResponse]);



  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")
  const reqheader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }
  const result = await deleteJobAPI(id,reqheader)
  console.log(result);
  if (result.status===200) {
    getAllJob()
    
  }
  else{
    console.log(result.response.data);
    getAllJob()

  }
  }

  const toggleRow = (rowId) => {
    // Toggle the open/closed status for the clicked row
    setOpenRows((prevOpenRows) => {
      const newOpenRows = {
        ...prevOpenRows,
        [rowId]: !prevOpenRows[rowId],
      };
      console.log('New openRows:', newOpenRows);
      return newOpenRows;
    });
  };

  const jobNo = allJobs.length;

  return (
    <div className='row '>
      <div className='col-lg-2'>
        <Sidebar />
      </div>
      <div className='col-lg-10 '>
        <div className='row justify-content-evenly mt-3'>
          <div className='col-lg-3 border shadow text-white  p-5 me-2'>
            <h3 className='text-center'>
              <i className='fa-solid fa-clipboard-list me-2'></i>No Of Jobs
            </h3>
            <h1 className='text-center text-danger'>{jobNo}</h1>
          </div>
          <div className="col-lg-3 border shadow text-white  p-5">
            <h3 className='text-center'><i class="fa-solid fa-people-group me-2 "></i>Freelancer Collaborations</h3>
            <h1 className='text-center'>264</h1>
          </div>
          <div className="col-lg-3 border shadow text-white  p-5">
            <h3 className='text-center'><i class="fa-solid fa-comment me-2"></i>User Request</h3>
            <h1 className='text-center'>264</h1>
          </div>
        </div>
        <div className='row m-5'>
          <div className='col-lg-12'>
            <Table striped bordered hover shadow bg-light style={{backgroundColor:'white'}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Job Title</th>
                  <th>Category</th>
                  <th>rates</th>
                  <th>---</th>
                </tr>
              </thead>
              <tbody>
                {allJobs?.length > 0 ? (
                  allJobs?.map((item, index) => (
                    <React.Fragment key={item._id}>
                      <tr className="table-light ">
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.rates}</td>
                        <td>
                          <button
                            className='btn btn-outline-primary'
                            onClick={() => toggleRow(item._id)}
                          >
                            More
                          </button>
                        </td>
                      </tr>
                     
                        <Collapse in={openRows[item._id]}>
                        <tr className='mt-5 '>
                          <div className='row d-flex justify-content-center align-items-center'>
                            <div className="col-lg-6 ">
                              <img src={`${baseurl}/uploads/${item.image}`} width={'100%'} alt="" />
                            </div>
                            <div className="col-lg-6  flex-column">
                              <h4>Job Type : <span className='text-warning'>{item.type} </span></h4>
                              <p style={{textAlign:'justify'}}>{item.description}</p>
                              <div className='d-flex justify-content-between'>
                                <EditJob jobData={item}/>
                                <button className='btn btn-danger bg-danger' onClick={()=>handleDelete(item._id)}>DELETE</button>
                              </div>
                            </div>
                          </div>
                          </tr>
                        </Collapse>
                     
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan='5'>Nothing to display</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdHome;
