import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  addGrade(grade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grade)
    })
      .then(res => res.json())
      .then(data => {
        const newGrade = this.state.grades.concat(data);
        this.setState({ grades: newGrade });
      })
      .catch(err => console.error(err));
  }

  deleteGrade(id) {
    fetch(`/api/grades/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        const newGrades = this.state.grades.slice(0);
        const index = newGrades.findIndex(grade => id === grade.id);
        newGrades.splice(index, 1);
        this.setState({ grades: newGrades });
      });
  }

  getAverageGrade() {
    const grades = this.state.grades;
    let sum = null;
    let average = null;
    grades.forEach(grade => { sum += parseInt(grade.grade, 10); });
    if (isNaN(sum / grades.length)) {
      average = 'N/A';
    } else {
      average = Math.ceil(sum / grades.length);
    }
    return average;
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <div className="container">
        <Header average={average}/>
        <div className="d-flex">
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} />
          <GradeForm addGrade={this.addGrade} />
        </div>
      </div>
    );
  }
}

export default App;
