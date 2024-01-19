
import { baseurl } from "./baseurl"
import { commonAPI } from "./commonAPI"

//register function

export const registerAPI = async(logData)=>{
    return await commonAPI('POST',`${baseurl}/user/register`,logData,"")
}

//login fn

export const loginAPI = async(ldata)=>{
    return await commonAPI('POST',`${baseurl}/user/login`,ldata,"")
 }
 
 //update userProfile
 export const profileUpdateAPI = async(id,reqbody,reqheader)=>{
    return await commonAPI('PUT',`${baseurl}/user/update/${id}`,reqbody,reqheader)
 }


 //Add Jobs


 export const addJobsAPI = async(reqbody,reqheader)=>{
    return await commonAPI('POST',`${baseurl}/jobs/addjobs`,reqbody,reqheader)
}


//admin view jobs



export const userJobsView = async(reqheader)=>{
    return await commonAPI('GET',`${baseurl}/jobs/myjobs`,"",reqheader)
 } 
 


 //update user profile

 export const empUpdateAPI = async(uid,reqbody,reqheader)=>{
    return await commonAPI('PUT',`${baseurl}/user/empupdate/${uid}`,reqbody,reqheader)
 }


 //update job detals

 export const jobUpdateAPI = async(id,reqbody,reqheader)=>{
   return await commonAPI('PUT',`${baseurl}/jobs/jobupdate/${id}`,reqbody,reqheader)
 }


 //delete Job
 export const  deleteJobAPI = async(Id,reqheader)=>{
   //project id is passed as path parameter
   return await commonAPI('DELETE',`${baseurl}/jobs/remove/${Id}`,{},reqheader)
}



//user jobs view




export const userJobsViewAPI = async(searchKey,reqheader)=>{
   return await commonAPI('GET',`${baseurl}/jobs/alljobs?search=${searchKey}`,"",reqheader)
} 


//get single Job details 



export const getAJobAPI = async(id,reqheader)=>{
   return await commonAPI('GET',`${baseurl}/jobs/details/${id}`,"",reqheader)
} 



//add applied details
export const appliedAPI = async(reqbody,reqheader)=>{
   return await commonAPI('POST',`${baseurl}/applications/add`,reqbody,reqheader)
 }


//get jobrequests


export const getRequestAPI = async(reqheader)=>{
   return await commonAPI('GET',`${baseurl}/applications/requests`,"",reqheader)
} 


//get user applied job

export const getUserAppliesAPI = async(reqheader)=>{
   return await commonAPI('GET',`${baseurl}/applications/request`,"",reqheader)
} 

//job status update

export const statusUpdate = async(id,reqbody,reqheader)=>{
   return await commonAPI('PUT',`${baseurl}/jobs/jobstatusupdate/${id}`,reqbody,reqheader)
 }