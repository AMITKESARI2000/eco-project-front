import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const NamePlateCard = ({ memeCard: namePlate }) => {
  return (
    <div>
      <Card
        border="dark"
        style={{
          width: '91%',
          height: '20rem',
          padding: '0.1rem',
          margin: '1rem',
          borderRadius: '1rem',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1596340314589-bbc7f26a2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)',
        }}
      >
        {/* <Card.Img
          variant="top"
          src={namePlate.image}
          style={{
            width: '100%',
            height: '10rem',
          }}
        /> */}

        <Card.Body
          style={{
            color: 'aliceblue',
          }}
        >
          <Card.Title>{namePlate.name}</Card.Title>
          <Card.Text>{namePlate.task}</Card.Text>
          <Card.Text>
            <small className="text-muted">{namePlate.timeStamp}</small>
          </Card.Text>
          <img
            src={require(`${namePlate.image}`)}
            style={{
              width: '100%',
              height: '12rem',
              borderRadius: '1rem',
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default NamePlateCard;
