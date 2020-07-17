import React from 'react';

export default function GradeTable(props) {
  const grades = props.grades;
  const gradeList = grades.map(grade =>
    <Grade key={grade.id} name={grade.name} course={grade.course} grade={grade.grade} />
  );
  return (
    <table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {gradeList}
      </tbody>
    </table>
  );
}

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
    </tr>
  );
}
