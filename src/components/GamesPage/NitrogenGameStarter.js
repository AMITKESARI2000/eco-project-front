import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import nitrogen from '../../ProjectImage/NitrogenImage.png';

class NitrogenGameStarter extends Component {
  render () {
    return (
      <div
        class="text-center"
        style={{
          margin: '20px',
        }}
      >

        <Card style={{width: '50rem'}}>
          <Card.Img variant="top" src={nitrogen} />
          <Card.Body>
            <Card.Title>Nitrogen</Card.Title>
            <Card.Text>
              grow field which lacks nitrogen.
            </Card.Text>
            <Link to="/NitrogenGame" className="btn btn-danger">
              Nitrogen Game
            </Link>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NitrogenGameStarter;
