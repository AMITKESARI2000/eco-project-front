import React, { Component } from 'react';
import axios from 'axios';
import Blog from './Blog.component';
import './BlogsList.css';

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/blogs`)
      .then((res) => {
        console.log('BLOGS', res.data);
        this.setState({ exercises: res.data });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  deleteExercise = (id, e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/blogs/${id}`)
      .then(() => this.props.history.push('/blogs'))
      .catch((err) => console.log(`Error: ${err}`));
    this.setState({
      exercises: this.state.exercises.filter((exercise) => exercise._id !== id),
    });
  };

  render() {
    return (
      <div className="container-BlogsList">
        <h3>Logged Blogs</h3>

        <div>
          {this.state.exercises.map((currentblog) => {
            return (
              <Blog
                blog={currentblog}
                deleteExercise={this.deleteExercise}
                key={currentblog._id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default BlogsList;
