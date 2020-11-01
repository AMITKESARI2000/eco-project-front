import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BlogNavbar from './comp/navbar.component';
import BlogsList from './comp/BlogsList';
import EditBlog from './comp/edit-blog.component';
import CreateBlog from './comp/create-blog.component';
import CreateUser from './comp/create-user.component';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';

function BlogsPage() {
  return (
    <div className="container-fluid">
      <NavigationBar />
      <BlogNavbar />
      <br />
      <Switch>
        <Route path="/blogs" exact component={BlogsList} />
        <Route path="/blogs/edit/:id" component={EditBlog} />
        <Route path="/blogs/create" component={CreateBlog} />
        <Route path="/blogs/user" component={CreateUser} />
      </Switch>
      <ProjectFooter/>
    </div>
  );
}

export default BlogsPage;
