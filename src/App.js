// App.js

import React from 'react';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Sidebar from './components/Sidebar';
import MicroTasks from './Pages/MicroTasks';
import Profile from './Pages/Profile';
import Wallet from './Pages/Wallet';
import JobDetails from './components/JobDetails';
import AdHome from './Admin/AdHome';
import EmpProfile from './Admin/EmpProfile';
import AddJobs from './Admin/AddJobs';
import JobStatus from './Admin/JobStatus';
import Jobs from './components/Jobs';
import ContextShare from './context/ContextShare'; // Import the ContextShare component
import ApplyStatus from './Pages/ApplyStatus';

function App() {
  return (
    <div className="App">
      <Header />
      <ContextShare> {/* Wrap your components with ContextShare provider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login register />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/microtasks' element={<MicroTasks />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/jobdetails/:id' element={<JobDetails />} />
          <Route path='/employerHome' element={<AdHome />} />
          <Route path='/employerProfile' element={<EmpProfile />} />
          <Route path='/addjobs' element={<AddJobs />} />
          <Route path='/jobstatus' element={<JobStatus />} />
          <Route path='/myjoblistings' element={<Jobs />} />
          <Route path='/appliedjobs' element={<ApplyStatus/>}/>
        </Routes>
      </ContextShare>
      <Footer />
    </div>
  );
}

export default App;
