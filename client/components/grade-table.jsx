import React from 'react';

export default function GradeTable(props) {
  const grades = props.grades;
  const gradeList = grades.map(grade =>
    <Grade key={grade.id} name={grade.name} course={grade.course} grade={grade.grade} />
  );
  return (
    <div className="d-flex flex-column mr-3 w-75">
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
      {grades.length < 1 &&
      <h4>No Grades Recorded</h4>
      }
    </div>
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
