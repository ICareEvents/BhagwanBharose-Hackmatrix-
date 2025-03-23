import React, { useState } from 'react';
import api from '../services/api';
const ConsentForm = () => {
  const [userId, setUserId] = useState('');
  const [consent, setConsent] = useState(false);
  const [msg, setMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/consent/give", { id: userId, userId, consent });
    setMsg(res.msg);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md max-w-md mx-auto">
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} className="border p-2 w-full mb-4"/>
      <label className="flex items-center mb-4">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mr-2"/>
        Consent
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
      {msg && <p className="mt-4 text-center">{msg}</p>}
    </form>
  );
};
export default ConsentForm;