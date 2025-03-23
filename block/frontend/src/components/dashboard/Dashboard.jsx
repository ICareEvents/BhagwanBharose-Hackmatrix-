import React, { useEffect, useState } from 'react';
import api from '../services/api';
const Dashboard = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    api.get("/identity/query?id=sample").then(res => setData(res)).catch(err => console.log(err));
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {data ? <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};
export default Dashboard;