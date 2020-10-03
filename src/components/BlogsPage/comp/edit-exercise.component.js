import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/exercises/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      });

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/`)
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map((user) => user.username),
          });
        }
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/exercises/update/${this.props.match.params.id}`,
        exercise
      )
      //   .then((res) => console.log(res.data))
      .then(() => (window.location = '/'))
      .catch((err) => console.log(`Error: ${err}`));
  };

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.onChangeHandler}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={Math.random()} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              name="duration"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
