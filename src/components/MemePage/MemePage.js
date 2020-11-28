import React, { useState } from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import { Row, Col } from 'react-bootstrap';
import MemeCard from './MemeCard';
import meme1 from './Meme images/meme1.jpg';
import meme2 from './Meme images/meme2.jpg';
import meme3 from './Meme images/meme3.jpg';
import meme4 from './Meme images/meme4.jpg';
import meme5 from './Meme images/meme5.jpg';
import meme6 from './Meme images/meme6.jpeg';
import meme7 from './Meme images/450px-Water_when_the_soil_is_porous.jpg';
import meme8 from './Meme images/download.jpg';
import meme9 from './Meme images/Hummus_or_Humus.jpg';
import meme10 from './Meme images/meme6.jpg';
import meme11 from './Meme images/meme7.jpg';
import meme12 from './Meme images/memeBest.jpeg';

const MemePage = () => {
  const [cardBody, setCardBody] = useState ([
    {
      image: meme5,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme2,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme12,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme4,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme6,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme3,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme7,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme8,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme9,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme10,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme11,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
    {
      image: meme1,
      heading: 'meme',
      des: 'lorem20  ',
      timeStamp: '20th Oct 2020',
    },
  ]);
  return (
    <div style={{overflow: 'hidden'}}>
      <NavigationBar />
      <h2>
        MEMEMEMEMEMEMEMEMEMEMEMMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEME
      </h2>
      <Row>
        {cardBody.map (memeCard => {
          return (
            <Col md={4} key={Math.random ()}>
              <MemeCard memeCard={memeCard} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MemePage;
