import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';

class PhosphorusGame extends Component {
  render () {
    return (
      <div>

        <NavigationBar />
        Game of phosphorus
        <ProjectFooter />
      </div>
    );
  }
}

export default PhosphorusGame;
