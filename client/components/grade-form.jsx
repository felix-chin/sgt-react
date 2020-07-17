import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="w-25">
        <div className="d-flex flex-column">
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" className="form-control" />
          <input name="course" type="text" value={this.state.course} onChange={this.handleChange} placeholder="Course" className="form-control" />
          <input name="grade" type="text" value={this.state.grade} onChange={this.handleChange} placeholder="Grade" className="form-control" />
        </div>
        <div>
          <button type="submit" className="btn btn-success">Submit</button>
          <button type="reset" className="btn btn-light">Cancel</button>
        </div>
      </form>
    );
  }
}
