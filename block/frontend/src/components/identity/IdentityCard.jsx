import React from 'react';
const IdentityCard = ({ identity }) => (
  <div className="border p-4 rounded shadow-md">
    <h2 className="font-bold text-lg">ID: {identity.id}</h2>
    <p className="mt-2">Details: {JSON.stringify(identity.publicDetails)}</p>
    <p className="mt-2">Verified: {identity.verified ? "Yes" : "No"}</p>
  </div>
);
export default IdentityCard;