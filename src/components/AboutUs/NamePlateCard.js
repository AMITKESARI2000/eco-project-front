import React, {useState} from 'react';
import {Card} from 'react-bootstrap';

const NamePlateCard = ({memeCard: namePlate}) => {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1606349556520-8620c6a4be78?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=60)',
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
            fontSize: '1.3rem',
            lineHeight: '0.1em',
          }}
        >
          <Card.Title style={{fontSize: '1.9rem'}}>
            {namePlate.name}
          </Card.Title>
          <Card.Text>{namePlate.task}</Card.Text>
          <Card.Text>
            <small className="text-muted">
              {namePlate.timeStamp}
            </small>
          </Card.Text>
          <img
            src={require (`${namePlate.image}`)}
            style={{
              width: '24rem',
              height: '14rem',
              borderRadius: '1rem',
              right: '3%',
              position: 'absolute',
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default NamePlateCard;
