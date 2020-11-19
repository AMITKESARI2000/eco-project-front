import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import phos from '../../ProjectImage/PhosphorusImage.png';

class PhosphorusGameStarter extends Component {
  render () {
    return (
      <div
        class="text-center"
        style={{
          marginTop: '90px',
          justifyContent: 'center',
          display: 'flex',
        }}
      >

        <Card style={{width: '50rem'}}>
          <Card.Img variant="top" src={phos} />
          <Card.Body>
            <Card.Title>RamKishor-And-Phosphorus</Card.Title>
            <Card.Text>
              Help RamKishor to grow his field which lacks Phosphorus.
            </Card.Text>
            <Link to="/PhosphorusGame" className="btn btn-danger">
              Phosphorus Game
            </Link>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PhosphorusGameStarter;
