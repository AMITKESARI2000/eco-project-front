import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Worm from './SnakeGame/Images/earthworm_image.png';

class SnakeGameStarter extends Component {
  render () {
    return (
      <div
        class="text-center"
        style={{
          margin: '20px',
        }}
      >

        <Card style={{width: '50rem'}}>
          <Card.Img variant="top" src={Worm} />
          <Card.Body>
            <Card.Title>Worm-The-Saviour</Card.Title>
            <Card.Text>
              Play The Classic Snake game with a twist of worms and learn about Vermicompost.
            </Card.Text>
            <Link to="/SnakeGame" className="btn btn-danger">
              Snake Game
            </Link>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SnakeGameStarter;
