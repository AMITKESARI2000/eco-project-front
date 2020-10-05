import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import GamesPage from './components/GamesPage/GamesPage';
import BlogsPage from './components/BlogsPage/BlogsPage';
import AboutUs from './components/AboutUs/AboutUs';
import PolPredictor from './components/PolPredictor/PolPredictor';
import MemePage from './components/MemePage/MemePage';
import BlogsList from './components/BlogsPage/comp/blogs-list.component';
import EditBlog from './components/BlogsPage/comp/edit-blog.component';
import CreateBlog from './components/BlogsPage/comp/create-blog.component';
import CreateUser from './components/BlogsPage/comp/create-user.component';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route path={['/', '/home']} exact component={HomePage} />
          <Route path="/games" component={GamesPage} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/polpredict" component={PolPredictor} />
          <Route path="/memes" component={MemePage} />

          <Route path="/blogs" component={BlogsPage} />
          {/* <Route path="/blogs"  component={BlogsList} /> */}
          <Route path="/blogs/edit/:id" component={EditBlog} />
          <Route path="/blogs/create" component={CreateBlog} />
          <Route path="/blogs/user" component={CreateUser} />

          {/* <Route component={ErrorPage}  /> */}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
