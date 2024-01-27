import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { getRequestAPI } from '../Services/allApi'

function Notifications() {
    const [reqData,setReqData] = useState({})

  const jobRequest = async()=>{
    const token = sessionStorage.getItem("token")
        console.log(token);
        const reqheader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }

      const result = await getRequestAPI(reqheader)
      console.log(result);
      if (result.status === 200) {
        setReqData(result.data)

      }
      else{
        console.log(result.response.data);
      }

  }

  useEffect(()=>{
    jobRequest()
  },[])
  return (
    <div>
           <div className='row '  >
      <div className="col-lg-2">
        <Sidebar/>
      </div>
        <div className="col-lg-10 p-5  ">
            <div className=" border shadow rounded m-3 p-5 d-flex flex-column notification-bgimg">
                    <h4>Notifications</h4>
                    <hr />

                    {
                    reqData?.length>0?
                    reqData.map((item,index)=>(
                        (index+1)%2==0? <h6><i class="fa-solid fa-suitcase text-primary mt-4 me-3 border dark "> </i>{item.name}<span className='text-secondary'> applied for a job</span> {item.jobTitle}</h6>:
                        <h6><i class="fa-solid fa-suitcase text-success mt-4 me-3  "> </i>{item.name}<span className='text-secondary'> applied for a job</span> {item.jobTitle}</h6>


                    )):
                    <p>Nothing To Display</p>
                    }

            </div>
        </div>
    </div>
    </div>
  )
}

export default Notifications