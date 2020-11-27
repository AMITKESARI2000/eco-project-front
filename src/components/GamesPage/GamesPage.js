import React from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import NitrogenGameStarter from './NitrogenGameStarter';
import SnakeGameStarter from './SnakeGameStarter';
import PhosphorusGameStarter from './PhosphorusGameStarter';
import PotassiumGameStarter from './PotassiumGameStarter';

const GamesPage = () => {
  return (
    <div style={{justifyContent: 'flex-start'}}>
      <NavigationBar />
      <SnakeGameStarter />
      <NitrogenGameStarter />
      <PhosphorusGameStarter />
      <PotassiumGameStarter />
      <div style={{margin: '50px'}}>
        Image Credits :
        {' '}
        <strong>
          https://jobescompany.com/blog/knowing-npk-your-soil-made-better/
        </strong>
      </div>
      <ProjectFooter />
    </div>
  );
};

export default GamesPage;
