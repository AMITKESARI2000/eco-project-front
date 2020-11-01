import React, {useState} from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import { Row, Col} from 'react-bootstrap';
import MemeCard from './MemeCard';
import meme1 from './Meme images/meme1.jpg';
import meme2 from './Meme images/meme2.jpg';
import meme3 from './Meme images/meme3.jpg';
import meme4 from './Meme images/meme4.jpg';
import meme5 from './Meme images/meme5.jpg';
import meme6 from './Meme images/meme6.jpeg';

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
      image: meme3,
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
