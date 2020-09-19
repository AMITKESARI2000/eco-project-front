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

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route path={['/', '/home']} exact component={HomePage} />
          <Route path="/games" component={GamesPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/polpredict" component={PolPredictor} />
          <Route path="/memes" component={MemePage} />

          {/* <Route component={ErrorPage}  /> */}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
