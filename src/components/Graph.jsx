import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const JobPostingsGraph = () => {
  const jobPostingsData = [
    { month: 'Jan', count: 50 },
    { month: 'Feb', count: 75 },
    { month: 'Mar', count: 90 },
    { month: 'Apr', count: 60 },
    { month: 'May', count: 110 },
    { month: 'Jun', count: 80 },
  ];

  return (
    <div>
      <h3>Monthly Job Postings</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={jobPostingsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default JobPostingsGraph;
