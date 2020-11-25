import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';
import App from './App';
class PotassiumGame extends Component {
  render () {
    return (
      <div>

        <NavigationBar />
        <App />
        <ProjectFooter />
      </div>
    );
  }
}

export default PotassiumGame;
