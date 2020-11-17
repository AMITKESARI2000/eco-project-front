import React from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import SnakeGame from './SnakeGame/snakeGame';
import SnakeGameStarter from './SnakeGameStarter';

const GamesPage = () => {
  return (
    <div>
      <NavigationBar />
      <SnakeGameStarter />
      <ProjectFooter />
    </div>
  );
};

export default GamesPage;
