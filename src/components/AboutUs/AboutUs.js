import React, {useState} from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import {ProgressBar, Row, Col} from 'react-bootstrap';
import Particles from 'react-particles-js';
import NamePlateCard from './NamePlateCard';
import {Link} from 'react-router-dom';

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
      task: ' Backend Dev, Frontend Dev ',
    },
    {
      image: './Ajay.jpeg',
      name: 'D. Ajay',
      task: 'Content Creation, Data Collection ',
    },
    {
      image: './Anand.jpeg',
      name: 'Anu Anand Annu ',
      task: 'Content Creation , Data Collection ',
    },
    {
      image: './Sowmya.jpeg',
      name: 'Emani Naga Sowmya',
      task: 'Project data and design',
    },
    {
      image: './Teju.jpeg',
      name: 'Tejaswini Hotkar',
      task: 'Project data and Design',
    },
    {
      image: './Manjunath.jpeg',
      name: 'V. Manjunath',
      task: 'Frontend Dev, Game Dev',
    },
    {
      image: './Angki.jpeg',
      name: 'Angki Pajing',
      task: 'Project Data and Design',
    },
    {
      image: './Ankit.jpeg',
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
      <Particles
        height="100em"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1803.4120608655228,
              },
            },
            color: {
              value: 'lime',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 2,
                color: '#000000',
              },
              polygon: {
                nb_sides: 4,
              },
            },
            opacity: {
              value: 0.4008530152163807,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 1.5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: '#ffffff',
              opacity: 0.3687847739990702,
              width: 0.6413648243462091,
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        style={{zIndex: '-1', position: 'absolute'}}
      />

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
      <p
        style={{
          // backgroundColor: 'chocolate',
          border: '0.3rem dotted chocolate',
          opacity: '0.9',
          fontSize: '1.7rem',
          margin: '1%',
        }}
      >
        <strong>“Desh ki mitti se jude log” </strong>
        made this in hope that it will help to spread knowledge about
        soil pollution in much shorter time through memes, games etc.{' '}
        This is our team and we worked together to promote a good
        scientific way to make soil healthy for plants and also to
        spread how this plays a major role in our life cycles as every
        living organism is attached to the soil in some way. Please refer this for
        getting more info about our website (like reference links and all)

        <a
          href="https://drive.google.com/file/d/1FT8cHN_zpiJsUhoG9iukPvmiL-QMjnKe/view?usp=drivesdk"
          className="btn btn-danger"
        >
          More About Our Project
        </a>
      </p>

      <ProjectFooter />
    </div>
  );
};

export default AboutUS;
