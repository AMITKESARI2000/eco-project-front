import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

const Blog = ({ blog, deleteExercise }) => {
    return (
        <div>
            <Jumbotron
                style={{
                    padding: '1%',
                    background:
                        'linear-gradient(113deg,#f7ca5e,#f4c59b,#f5e9e9)',
                }}
            >
                <h3>{blog.heading}</h3>
                <p>{blog.description}</p>
                <img
                    src={blog.imgLink}
                    alt="Blog Img"
                    style={{ position: 'relative', right: '0' }}
                ></img>
                <p>
                    {blog.username} {blog.date.substring(0, 10)}{' '}
                    <Link to={'/blogs/edit/' + blog._id}>edit</Link> |{' '}
                    <a
                        href="/"
                        onClick={(e) => {
                            deleteExercise(blog._id, e);
                        }}
                    >
                        delete
                    </a>
                    <span> Citation: </span>
                      <a href={blog.citation}>  {blog.citation}</a>
                </p>
            </Jumbotron>
        </div>
    );
};
export default Blog;
