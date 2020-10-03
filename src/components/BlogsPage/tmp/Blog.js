import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog: blog, deleteBlog }) => {
  return (
    <tr>
      <td>{blog.username}</td>
      <td>{blog.title}</td>
      <td>{blog.description}</td>
      <td>{blog.date.substring(0, 10)}</td>
      <td>{blog.pic}</td>

      <td>
        <Link to={'/edit/' + blog._id}>edit</Link> |{' '}
        <a
          href="#"
          onClick={() => {
            deleteBlog(blog._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};
export default Blog;
