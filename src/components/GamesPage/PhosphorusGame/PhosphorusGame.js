import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';
import App from './App';
class PhosphorusGame extends Component {
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

export default PhosphorusGame;
