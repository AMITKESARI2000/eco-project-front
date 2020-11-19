import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import phos from '../../ProjectImage/PotassiumImage.png';

class PotassimuGameStarter extends Component {
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
            <Card.Title>Raghu-And-Potassium</Card.Title>
            <Card.Text>
              Help Raghu to grow his field which lacks Potassium.
            </Card.Text>
            <Link to="/Po" className="btn btn-danger">
              Potassium Game
            </Link>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PotassimuGameStarter;
