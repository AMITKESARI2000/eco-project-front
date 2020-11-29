import React from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import NitrogenGameStarter from './NitrogenGameStarter';
import SnakeGameStarter from './SnakeGameStarter';
import PhosphorusGameStarter from './PhosphorusGameStarter';
import PotassiumGameStarter from './PotassiumGameStarter';
import FunFacts from '../FunFacts/FunFacts';
import Particles from 'react-particles-js';
import {FaBlackTie} from 'react-icons/fa';

const GamesPage = () => {
  return (
    <div>

      <NavigationBar />
      <Particles
        height="130em"
        params={{
          particles: {
            color: 'black',
            // line_linked: {
            //   color: 'lime',
            // },
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
        style={{
          position: 'absolute',
          zIndex: '-1',
        }}
      />

      <div
        style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
      >

        <SnakeGameStarter />
        <FunFacts />
        <NitrogenGameStarter />
        {/* <FunFacts /> */}
        <PhosphorusGameStarter />
        {/* <FunFacts /> */}
        <PotassiumGameStarter />
        {/* <FunFacts /> */}
      </div>
      <ProjectFooter />
    </div>
  );
};

export default GamesPage;
