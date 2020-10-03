import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateBlog extends Component {
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
      .get(`${process.env.REACT_APP_BASE_URL}/users/`)
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map((user) => user.username),
            username: res.data[0].username,
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

    const blog = {
      username: this.state.username,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      pic: this.state.pic,
    };
    console.log(blog);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/blogs/add`, blog)
      .then(() => (window.location = '/'))
      .catch((err) => console.log(`Error: ${err}`));
  };

  render() {
    return (
      <div>
        <h3>Create New Blog </h3>
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
            <label>Title: </label>
            <input
              type="text"
              required
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeHandler}
            />
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
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Pic URL: </label>
            <input
              type="text"
              required
              name="pic"
              className="form-control"
              value={this.state.pic}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Blog"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
