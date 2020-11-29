import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col } from 'react-bootstrap';

const Blog = ({ blog, deleteExercise }) => {
    return (
        <div >
            <Jumbotron
                style={{
                    padding: '1%',
                    position: 'relative',
                    border: '0.5rem solid green',
                    background:
                        'linear-gradient(113deg,#f7ca5e,#f4c59b,#f5e9e9)',
                }}
            >
                <Row
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0',
                    }}
                >
                    <Col
                        md={4}
                        xl={3}
                        style={{
                            padding: '0%',
                            margin: '0%',
                        }}
                    >
                        {blog.imgLink && (
                            <img
                                src={blog.imgLink}
                                alt="Blog Img"
                                style={{
                                    position: 'relative',
                                    right: '0',
                                    width: '22vw',
                                }}
                            ></img>
                        )}
                    </Col>
                    <Col>
                        {' '}
                        <div>
                            <h3>{blog.heading}</h3>
                            <p>{blog.description}</p>

                            <p>
                                {blog.username} {blog.date.substring(0, 10)}{' '}
                                {blog.citation && (
                                    <span>
                                        {' '}
                                        Citation:
                                        <a href={blog.citation}>
                                            {' '}
                                            {blog.citation}
                                        </a>
                                    </span>
                                )}
                                <div
                                    style={{
                                        // display: 'inline-block',
                                        position: 'absolute',
                                        textAlign: 'right',
                                        right: '1%',
                                    }}
                                >
                                    <Link to={'/blogs/edit/' + blog._id}>
                                        Edit
                                    </Link>{' '}
                                    |{' '}
                                    <a
                                        href="/"
                                        onClick={(e) => {
                                            deleteExercise(blog._id, e);
                                        }}
                                    >
                                        Delete
                                    </a>
                                </div>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};
export default Blog;
