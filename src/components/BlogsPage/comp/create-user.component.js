import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };
    console.log(user);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/users/add`, user)
      .then((res) => console.log(res.data));

    this.setState({
      username: '',
    });
  };
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
