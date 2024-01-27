// ContextShare.js

import React, { createContext, useState } from 'react';

export const UserJobDataContext = createContext();
export const AdminJobDataContext = createContext();
export const EditJobResponseContext = createContext();  // Added this line
export const jobRequestContext = createContext()
export const isAuthTokenContext = createContext()


function ContextShare({ children }) {
  const [userJobData, setUserJobData] = useState({});
  const [adminJobData, setAdminJobData] = useState({});
  const [editJobResponse, setEditJobResponse] = useState({ data: null, message: "" });
  const [jobReqStatus,setJobReqStatus] = useState({})
  const [isAuthToken , setIsAuthToken] = useState(true)


  return (
    <>
      <UserJobDataContext.Provider value={{ userJobData, setUserJobData }}>
        <AdminJobDataContext.Provider value={{ adminJobData, setAdminJobData }}>
          <EditJobResponseContext.Provider value={{ editJobResponse, setEditJobResponse }}>
           <jobRequestContext.Provider value={{jobReqStatus,setJobReqStatus}}> 
           <isAuthTokenContext.Provider value={{isAuthToken , setIsAuthToken}}>
           {children}

           </isAuthTokenContext.Provider>
           </jobRequestContext.Provider>
          </EditJobResponseContext.Provider>
        </AdminJobDataContext.Provider>
      </UserJobDataContext.Provider>
    </>
  );
}

export default ContextShare;
