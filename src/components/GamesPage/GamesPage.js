import React from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import NitrogenGameStarter from './NitrogenGameStarter';
import SnakeGameStarter from './SnakeGameStarter';
import PhosphorusGameStarter from './PhosphorusGameStarter';
import PotassiumGameStarter from './PotassiumGameStarter';
import FunFacts from '../FunFacts/FunFacts';

const GamesPage = () => {
  return (
    <div>
      <NavigationBar />

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
