import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import './PhotoCarousel.css';
import image1 from '../../../ProjectImage/pImage6.jpg';
import image3 from '../../../ProjectImage/blogsImage1.jpg';
import image4 from '../../../ProjectImage/soil logo.png';
import image5 from '../../../ProjectImage/GameImage.jpg';
import image6 from '../../../ProjectImage/funFact.jpg';

const PhotoCarousel = () => {
  const [state, setState] = useState ({
    indicators: true,
    // fade: true,
    touch: true,
    pause: 'hover',
    interval: 1000,
    data: [],
  });
  return (
    <div className="container-PhotoCarousel">
      <Carousel
        {...state}
        className="carousal-PhotoCarousel"
        style={{height: '800px', width: '1800px'}}
      >
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image4}
            style={{maxWidth: '70%', boxShadow: 'none'}}
            alt="First slide"
          />
          <Carousel.Caption className="Caption1">
            <h1>Pollution Predictor.</h1>
            <p>Know and understand the condition of soil near your area.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image3}
            alt="Second slide"
          />

          <Carousel.Caption className="Caption2">
            <h1>Write Blogs</h1>
            <p>Give others knowledge, and learn from them too.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image1}
            alt="Third slide"
          />

          <Carousel.Caption className="Caption3">
            <h1>Meme Page</h1>
            <p>
              <strong>Show your humor in an innovative way.</strong>{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image5}
            alt="fourth slide"
          />

          <Carousel.Caption className="Caption4">
            <h1>Game Page</h1>
            <p>
              <strong>
                Learn about your problems in an fun way by playing games.
              </strong>
              {' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image6}
            alt="fifth slide"
          />

          <Carousel.Caption className="Caption4">
            <h1>Fun Facts</h1>
            <p>
              <strong>
                Checkout Amazing Facts For soil.
              </strong>
              {' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
