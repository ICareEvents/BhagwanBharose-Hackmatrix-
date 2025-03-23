import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between">
      <div className="text-white font-bold">Blockchain Identity</div>
      <div>
        <Link to="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
        <Link to="/dashboard" className="text-gray-300 hover:text-white mx-2">Dashboard</Link>
        <Link to="/consent" className="text-gray-300 hover:text-white mx-2">Consent</Link>
        <Link to="/audit" className="text-gray-300 hover:text-white mx-2">Audit</Link>
        <Link to="/login" className="text-gray-300 hover:text-white mx-2">Login</Link>
      </div>
    </div>
  </nav>
);
export default Navbar;