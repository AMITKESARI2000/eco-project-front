import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-dark navbar-expand-lg">
        <Link to="/blogs" className="navbar-brand">
          BLOGS
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/blogs/create" className="nav-link">
                Create Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/blogs/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
