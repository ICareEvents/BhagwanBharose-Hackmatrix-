import React, { useState } from 'react';
import api from '../services/api';
const AuditTrail = () => {
  const [audit, setAudit] = useState(null);
  const [id, setId] = useState('');
  const fetchAudit = async () => {
    const res = await api.get(`/audit/query?id=${id}`);
    setAudit(res);
  };
  return (
    <div className="container mx-auto p-4">
      <input type="text" placeholder="Audit ID" value={id} onChange={(e) => setId(e.target.value)} className="border p-2 mb-4 w-full max-w-md mx-auto"/>
      <button onClick={fetchAudit} className="bg-green-500 text-white p-2 rounded block mx-auto mb-4">Fetch Audit</button>
      {audit && <pre className="bg-gray-100 p-4 rounded max-w-2xl mx-auto">{JSON.stringify(audit, null, 2)}</pre>}
    </div>
  );
};
export default AuditTrail;