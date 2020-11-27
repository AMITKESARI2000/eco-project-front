import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';
import Finish from './Finish2';
import App from './App';
class PhosphorusGame extends Component {
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

export default PhosphorusGame;
