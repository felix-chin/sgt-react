import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    event.preventDefault();
    const grade = this.state;
    const addGrade = this.props.addGrade;
    addGrade(grade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset} className="w-25">
        <h4>Add Grade</h4>
        <div className="d-flex flex-column">
          <div className="input-group mb-1">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-user fa-fw"></i>
              </span>
            </div>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              className="form-control" />
          </div>
          <div className="input-group mb-1">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-book fa-fw"></i>
              </span>
            </div>
            <input
              name="course"
              type="text"
              value={this.state.course}
              onChange={this.handleChange}
              placeholder="Course"
              className="form-control" />
          </div>
          <div className="input-group mb-1">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-graduation-cap fa-fw"></i>
              </span>
            </div>
            <input
              name="grade"
              type="number"
              value={this.state.grade}
              onChange={this.handleChange}
              placeholder="Grade"
              className="form-control" />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-success mr-1">Add</button>
          <button type="reset" onClick={this.handleReset} className="btn btn-outline-secondary">Cancel</button>
        </div>
      </form>
    );
  }
}
