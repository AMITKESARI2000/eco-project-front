import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog, deleteExercise }) => {
  return (
    <tr>
      <td>{blog.username}</td>
      <td>{blog.description}</td>
      <td>{blog.duration}</td>
      {/* <td>{blog.date.substring(0, 10)}</td> */}
      <td>
        <Link to={'/edit/' + blog._id}>edit</Link> |{' '}
        <a
          href="/"
          onClick={(e) => {
            deleteExercise(blog._id, e);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};
export default Blog;
