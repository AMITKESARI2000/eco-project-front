import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import GamesPage from './components/GamesPage/GamesPage';
import BlogsPage from './components/BlogsPage/BlogsPage';
import AboutUs from './components/AboutUs/AboutUs';
import PolPredictorMain from './components/PolPredictor/PolPredictorMain';
import MemePage from './components/MemePage/MemePage';
import BlogsList from './components/BlogsPage/comp/BlogsList';
import EditBlog from './components/BlogsPage/comp/edit-blog.component';
import CreateBlog from './components/BlogsPage/comp/create-blog.component';
import CreateUser from './components/BlogsPage/comp/create-user.component';
import SnakeGame from './components/GamesPage/SnakeGame/snakeGame';

function App () {
  return (
    <HashRouter basename="/">

      <div className="App">
        <Switch>
          <Route path={['/', '/home']} exact component={HomePage} />

          <Route path="/polpredict" component={PolPredictorMain} />

          <Route path="/games" component={GamesPage} />
          <Route path="/SnakeGame" component={SnakeGame} />

          <Route path="/aboutus" component={AboutUs} />

          <Route path="/blogs" component={BlogsPage} />
          {/* <Route path="/blogs"  component={BlogsList} /> */}
          <Route path="/blogs/edit/:id" component={EditBlog} />
          <Route path="/blogs/create" component={CreateBlog} />
          <Route path="/blogs/user" component={CreateUser} />

          <Route path="/memes" component={MemePage} />

          {/* <Route component={ErrorPage}  /> */}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
