import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

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
      .then(data => {
        this.setState({ grades: data });
        this.getAverageGrade();
      })
      .catch(err => console.error(err));
  }

  getAverageGrade() {
    const grades = this.state.grades.slice(0);
    let sum = null;
    grades.forEach(grade => { sum += grade.grade; });

    let average = sum / grades.length;
    if (isNaN(average)) {
      average = 'N/A';
    } else {
      average = Math.floor(average);
    }
    this.setState({ average: average });
  }

  render() {
    return (
      <div className="container">
        <Header average={this.state.average}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
