import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './comp/navbar.component';
import BlogsList from './comp/blogs-list.component';
import EditBlog from './comp/edit-blog.component';
import CreateBlog from './comp/create-blog.component';
import CreateUser from './comp/create-user.component';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';

function BlogsPage() {
  return (
    <div className="container-fluid">
      <NavigationBar />
      <Navbar />
      <br />
      <BlogsList />
    </div>
  );
}

export default BlogsPage;
