import React from 'react';

export default function Header(props) {
  return (
    <div className="header">
      <h1>Student Grade Table</h1>
      <h4>Average Grade</h4>
      <h4>{props.average}</h4>
    </div>
  );
}
