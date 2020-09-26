import React from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import SnakeGame from './SnakeGame/snakeGame';

const GamesPage = () => {
  return (
    <div>
      <NavigationBar />
      <SnakeGame />
    </div>
  );
};

export default GamesPage;
