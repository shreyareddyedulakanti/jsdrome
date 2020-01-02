import React from 'react';

function Person(details) {
  return (
    <div>
      <h1>Details</h1>
      <p><b>Firstname:</b> { details.name.firstname }</p>
      <p><b>Lastname:</b> { details.name.lastname }</p>
    </div>
  );
}

export default Person;