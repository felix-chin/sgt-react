import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: 0
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  getAverageGrade() {
    const grades = this.state.grades.slice(0);
    let sum = null;
    let average = this.state.average;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    if (isNaN(sum / grades.length)) {
      average = 'N/A';
    } else {
      average = Math.floor(sum / grades.length);
    }
    return average;
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Header average={this.state.average}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
