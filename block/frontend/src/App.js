import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
const App = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);
export default App;