import React from 'react';
import AuditTrail from '../components/audit/AuditTrail';
const AuditPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold text-center mb-4">Audit Logs</h1>
    <AuditTrail />
  </div>
);
export default AuditPage;