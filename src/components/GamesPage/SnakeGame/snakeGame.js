import React, {Component} from 'react';
import Snake from './Snake';
import Food from './Food';
import Image from './Images/earthworm_image.png';
import './SnakeGame.css';
import FunFacts from '../../FunFacts/FunFacts';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor ((Math.random () * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor ((Math.random () * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

class SnakeGame extends Component {
  state = {
    direction: 'RIGHT',
    speed: 150,
    start: false,
    food: getRandomCoordinates (),
    snakeDots: [[0, 0], [2, 0], [4, 0]],
  };

  componentDidUpdate () {
    this.snakeOutOfBounds ();
    this.snakeCutHimself ();
    this.snakeEat ();
  }

  componentDidMount () {
    setInterval (this.snakeMove, this.state.speed);
    document.onkeydown = this.changeDirection;
  }

  changeDirection = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 87:
        if (this.state.direction !== 'DOWN') this.setState ({direction: 'UP'});
        break;
      case 83:
        if (this.state.direction !== 'UP') this.setState ({direction: 'DOWN'});
        break;
      case 65:
        if (this.state.direction !== 'RIGHT')
          this.setState ({direction: 'LEFT'});
        break;
      case 68:
        if (this.state.direction !== 'LEFT')
          this.setState ({direction: 'RIGHT'});
        break;
      default:
        console.log ('samajh jao kaha ho');
    }
  };

  snakeMove = () => {
    if (this.state.start) {
      let sn = [...this.state.snakeDots];
      let head = sn[sn.length - 1];
      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 2, head[1]];
          break;
        case 'UP':
          head = [head[0], head[1] - 2];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 2];
          break;
        default:
          console.log ('samajh jao kaha ho!!!');
      }
      sn.push (head);
      sn.shift ();
      this.setState ({
        snakeDots: sn,
      });
    }
  };
  snakeOutOfBounds = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
      this.gameOver ();
    }
  };
  snakeCutHimself = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    dots.pop ();
    dots.forEach (dot => {
      if (dot[0] === head[0] && dot[1] === head[1]) {
        this.gameOver ();
      }
    });
  };
  snakeEat () {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState ({
        food: getRandomCoordinates (),
      });
      this.enlargeSnake ();
      this.increaseSpeed ();
    }
  }

  enlargeSnake () {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift ([]);
    this.setState ({
      snakeDots: newSnake,
    });
  }
  gameOver = () => {
    alert (`Game Over. Snake length is ${this.state.snakeDots.length}`);
    this.setState ({
      direction: 'RIGHT',
      speed: 200,
      start: false,
      food: getRandomCoordinates (),
      snakeDots: [[0, 0], [2, 0], [4, 0]],
    });
  };
  increaseSpeed = () => {
    if (this.state.speed < 500) {
      this.setState ({
        speed: this.state.speed + 7,
      });
    }
  };
  startGame = () => {
    this.setState ({
      start: !this.state.start,
    });
  };
  render () {
    return (
      <div>
        <img
          src={Image}
          className="Worm"
          alt="earthworm-pic"
          width="1000"
          height="600"
        />

        <div className="buttons">
          <button value="Start" className="button1" onClick={this.startGame}>
            Start Game
          </button>
          <button value="Pause" className="button2" onClick={this.startGame}>
            Pause Game
          </button>
          <button value="Stop" className="button3" onClick={this.gameOver}>
            Stop Game
          </button>
        </div>

        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />
        </div>
        <FunFacts />;

        <p className="game-content">
          Vermicompost (vermi-compost) is the product of the decomposition process using various species
          {' '}
          of worms, usually red wigglers, white worms,
          and other earthworms, to create a mixture of decomposing vegetable or food waste, bedding materials,
          {' '}
          and vermicast. This process is called vermicompost, while the rearing of worms for this purpose
          is called vermiculture.

          Vermicast (also called worm castings, worm humus, worm manure, or worm faeces) is the
          {' '}
          end-product of the breakdown of organic matter by earthworms.[1] These castings have been shown to contain
          reduced levels of contaminants and a higher saturation of nutrients than
          {' '}
          the organic materials before vermicomposting.[2]

          Vermicompost contains water-soluble nutrients and is an excellent, nutrient-rich
          {' '}
          organic fertilizer and soil conditioner.[3] It is used in farming and small scale sustainable,
          {' '}
          organic farming.

        </p>
      </div>
    );
  }
}

export default SnakeGame;
