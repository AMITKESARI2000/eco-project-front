import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import CreateBlog from './CreateBlog';
import BlogsList from './BlogList';

const BlogsPage = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <Route path="/" exact component={BlogsList} />
      {/* <Route path="/edit/:id" component={EditBlog} /> */}
      <Route path="/create" component={CreateBlog} />
      {/* <Route path="/user" component={CreateUser} /> */}
    </div>
  );
};

export default BlogsPage;
