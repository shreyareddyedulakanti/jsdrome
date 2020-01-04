import React from 'react';

function Person(props) {
  return (
    <div>
      <h1>Details</h1>
      <p><b>Firstname:</b> { props.name.firstname }</p>
      <p><b>Lastname:</b> { props.name.lastname }</p>
    </div>
  );
}

export default Person;