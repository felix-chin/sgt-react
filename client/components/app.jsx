import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <Header />
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

function Header(props) {
  return <h1>Student Grade Table</h1>;
}

function GradeTable(props) {
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

export default App;
