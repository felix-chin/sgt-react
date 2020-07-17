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

  getAverageGrade() {
    const grades = this.state.grades.slice(0);
    let sum = null;
    let average = null;
    grades.forEach(grade => { sum += grade.grade; });

    if (isNaN(sum / grades.length)) {
      average = 'N/A';
    } else {
      average = Math.floor(sum / grades.length);
    }
    return average;
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <div className="container">
        <Header average={average}/>
        <div className="d-flex">
          <GradeTable grades={this.state.grades} />
          <GradeForm addGrade={this.addGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
