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
    console.log('Grades:', grades);
    let sum = null;
    let average = null;
    grades.forEach(grade => sum += grade.grade)
    console.log('Sum:', sum)
    if (isNaN(sum / grades.length)) {
      average = 'N/A';
    } else {
      average = Math.floor(sum / grades.length);
    }
    console.log('Average:', average)
    return average;
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header average={''}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
