import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';

class PotassiumGame extends Component {
  render () {
    return (
      <div>

        <NavigationBar />
        Game of Potassium
        <ProjectFooter />
      </div>
    );
  }
}

export default PotassiumGame;
