import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';
import App from './App';
import Finish from './Finish';

class NitrogenGame extends Component {
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

export default NitrogenGame;
