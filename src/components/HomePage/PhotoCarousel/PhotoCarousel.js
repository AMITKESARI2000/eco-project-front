import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import './PhotoCarousel.css';
import image1 from '../../../ProjectImage/pImage6.jpg';
import image3 from '../../../ProjectImage/blogsImage1.jpg';
import image4 from '../../../ProjectImage/soil logo.png';
import image5 from '../../../ProjectImage/GameImage.jpg';

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
      <h2 className="header-PhotoCarousel">Featured</h2>
      <Carousel
        {...state}
        className="carousal-PhotoCarousel"
        style={{height: '800px', width: '1800px'}}
      >
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image4}
            style={{maxWidth: '80%'}}
            alt="First slide"
          />
          <Carousel.Caption style={{color: 'black'}}>
            <h3>Pollution Predictor.</h3>
            <p>Know and understand the condition of soil near your area.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Write Blogs</h3>
            <p>Give others knowledge, and learn from them too.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image1}
            alt="Third slide"
          />

          <Carousel.Caption style={{color: 'black'}}>
            <h3>Meme Page</h3>
            <p>
              <strong>Show your humor in an innovative way.</strong>{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src={image5}
            alt="Third slide"
          />

          <Carousel.Caption style={{color: 'black'}}>
            <h3>Game Page</h3>
            <p>
              <strong>
                Learn about your problems in an fun way by playing games.
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
