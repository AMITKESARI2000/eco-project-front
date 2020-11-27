import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';
import Finish from './Finish';
import App from './App';
class PotassiumGame extends Component {
  render () {
    return (
      <div>

        <NavigationBar />
        <App />
        <Finish />
        <ProjectFooter />
      </div>
    );
  }
}

export default PotassiumGame;
