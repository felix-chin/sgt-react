import React from 'react';

export default function Header(props) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>Student Grade Table</h1>
      <h3>Average Grade <span className="badge badge-secondary">{props.average}</span></h3>
    </div>
  );
}
