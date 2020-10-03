import React, { Component } from 'react';
import axios from 'axios';
import Blog from './Blog';

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/blogs`)
      .then((res) => {
        this.setState({ blogs: res.data });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  deleteExercise = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/blogs/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(`Error: ${err}`));
    this.setState({
      blogs: this.state.blogs.filter((blog) => blog._id !== id),
    });
  };

  render() {
    return (
      <div>
        <h3>Logged Blogs</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Pic URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.blogs.map((currentblog) => {
              return (
                <Blog
                  blog={currentblog}
                  deleteBlog={this.deleteBlog}
                  key={currentblog._id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default BlogsList;
