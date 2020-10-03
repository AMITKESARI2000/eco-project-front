import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './comp/navbar.component';
import ExercisesList from './comp/exercises-list.component';
import EditExercise from './comp/edit-exercise.component';
import CreateExercise from './comp/create-exercise.component';
import CreateUser from './comp/create-user.component';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';

function BlogsPage() {
  return (
    <Router>
      <div className="container-fluid">
        <NavigationBar/>
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default BlogsPage;
