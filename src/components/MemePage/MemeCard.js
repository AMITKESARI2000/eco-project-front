import React from 'react';
import { Card } from 'react-bootstrap';

const MemeCard = ({ memeCard }) => {
  return (
    <div>
      <Card
        border="dark"
        style={{
          width: '92%',
          height: '',
          padding: '1rem',
          margin: '1rem',
          background: 'linear-gradient(113deg,red,lightcoral,rosybrown)',
        }}
      >
        <Card.Img
          variant="top"
          src={memeCard.image}
          style={{
            width: '100%',
            height: '20rem',
          }}
        />
        <Card.Body>
          <Card.Title>{memeCard.heading}</Card.Title>
          <Card.Text>{memeCard.des}</Card.Text>
          <Card.Text>
            <small className="text-muted">{memeCard.timeStamp}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemeCard;
