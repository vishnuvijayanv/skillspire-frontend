// ContextShare.js

import React, { createContext, useState } from 'react';

export const UserJobDataContext = createContext();
export const AdminJobDataContext = createContext();
export const EditJobResponseContext = createContext();  // Added this line
export const jobRequestContext = createContext()

function ContextShare({ children }) {
  const [userJobData, setUserJobData] = useState({});
  const [adminJobData, setAdminJobData] = useState({});
  const [editJobResponse, setEditJobResponse] = useState({ data: null, message: "" });
  const [jobReqStatus,setJobReqStatus] = useState({})


  return (
    <>
      <UserJobDataContext.Provider value={{ userJobData, setUserJobData }}>
        <AdminJobDataContext.Provider value={{ adminJobData, setAdminJobData }}>
          <EditJobResponseContext.Provider value={{ editJobResponse, setEditJobResponse }}>
           <jobRequestContext.Provider value={{jobReqStatus,setJobReqStatus}}> 
           {children}
           </jobRequestContext.Provider>
          </EditJobResponseContext.Provider>
        </AdminJobDataContext.Provider>
      </UserJobDataContext.Provider>
    </>
  );
}

export default ContextShare;
