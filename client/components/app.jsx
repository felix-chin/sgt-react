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
  }

  componentDidMount() {
    // fetch('/api/grades')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ grades: data });
    //   })
    //   .catch(err => console.error(err));
  }

  addGrade(grade) {
    fetch('/api/grades', {
      method: 'POST',
      body: JSON.stringify(grade)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: data });
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
    return average;
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <div className="container">
        <Header average={average}/>
        <div className="d-flex">
          <GradeTable grades={this.state.grades} />
          <GradeForm />
        </div>
      </div>
    );
  }
}

export default App;
