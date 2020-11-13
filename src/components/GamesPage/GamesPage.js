import React from 'react';
import FunFacts from '../FunFacts/FunFacts';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import SnakeGame from './SnakeGame/snakeGame';

const GamesPage = () => {
  return (
    <div>
      <NavigationBar />
      <FunFacts />
      <SnakeGame />
    </div>
  );
};

export default GamesPage;
