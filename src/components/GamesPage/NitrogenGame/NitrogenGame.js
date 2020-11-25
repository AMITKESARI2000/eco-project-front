import React, {Component} from 'react';
import NavigationBar from '../../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../../HomePage/ProjectFooter/ProjectFooter';

class NitrogenGame extends Component {
  render () {
    return (
      <div>

        <NavigationBar />

        Game of nitrogen <ProjectFooter />
      </div>
    );
  }
}

export default NitrogenGame;
