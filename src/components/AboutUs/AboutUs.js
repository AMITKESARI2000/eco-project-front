import React, {useState} from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';

import {ProgressBar, Row, Col} from 'react-bootstrap';

import NamePlateCard from './NamePlateCard';

const AboutUS = () => {
  const [namePlates, setNamePlates] = useState ([
    {
      image: './aditya.jpeg',
      name: ' Aditya Sharma',
      task: 'Frontend Dev, Game Dev',
    },
    {
      image: './amit.jpg',
      name: ' Amit Kesari',
      task: ' Backend , Frontend Dev ',
    },
    {image: './Ajay.jpeg', name: 'D. Ajay', task: 'Content Creation'},
    {image: './Anand.jpeg', name: 'Anu Anand Annu ', task: 'Data Collection '},
    {
      image: './Sowmya.jpeg',
      name: 'Emani Naga Sowmya',
      task: 'Project content and design',
    },
    {image: './404.png', name: 'Tejaswini Hotkar', task: 'Website Design'},
    {
      image: './Manjunath.jpeg',
      name: 'V. Manjunath',
      task: 'Frontend Dev, Game Dev',
    },
    {image: './404.png', name: 'Angki Pajing', task: 'Data collection'},
    {
      image: './404.png',
      name: 'Ankit Ghildiyal ',
      task: 'Project write up and Content',
    },
    {image: './404.png', name: ' L Sai Kritik', task: 'NONE'},
  ]);
  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
      <NavigationBar />
      {/* <img src={"./amit.jpg"} /> */}

      <div>
        <ProgressBar
          striped
          variant="success"
          now={51}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
        <ProgressBar
          striped
          variant="info"
          now={40}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
        <ProgressBar
          striped
          variant="warning"
          now={80}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
        <ProgressBar
          striped
          variant="danger"
          now={70}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
      </div>
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0',
        }}
      >
        {namePlates.map (namePlate => {
          return (
            <Col
              md={3}
              key={Math.random ()}
              style={{
                padding: '0',
                margin: '0',
              }}
            >
              <NamePlateCard memeCard={namePlate} />
            </Col>
          );
        })}
      </Row>

      <ProjectFooter />
    </div>
  );
};

export default AboutUS;
