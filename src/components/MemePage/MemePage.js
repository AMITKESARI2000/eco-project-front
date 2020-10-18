import React, { useState } from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import { Card, CardColumns, Row, Col } from 'react-bootstrap';
import MemeCard from './MemeCard';

const MemePage = () => {
  const [cardBody, setCardBody] = useState([
    {
      image:
        'https://images.unsplash.com/photo-1532054241088-402b4150db33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image:
        'https://images.unsplash.com/photo-1532054241088-402b4150db33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image:
        'https://images.unsplash.com/photo-1532054241088-402b4150db33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image:
        'https://images.unsplash.com/photo-1532054241088-402b4150db33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image:
        'https://images.unsplash.com/photo-1532054241088-402b4150db33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image:
        'https://images.unsplash.com/photo-1532054241088-402b4150db33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
  ]);
  return (
    <div style={{overflow:"hidden"}}>
      <NavigationBar />
<h2 >MEMEMEMEMEMEMEMEMEMEMEMMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEME</h2>
      <Row>
        {cardBody.map((memeCard) => {
          return (
            <Col md={4} key={Math.random()}>
              <MemeCard memeCard={memeCard} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MemePage;
