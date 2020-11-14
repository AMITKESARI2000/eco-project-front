import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import './PhotoCarousel.css';
import image1 from '../../../ProjectImage/pImage6.jpg';
import image2 from '../../../ProjectImage/pImage1.jpg';

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
      <Carousel {...state} className="carousal-PhotoCarousel">
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src="https://images.unsplash.com/photo-1567710065860-dcef8df041e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Pollution Predictor.</h3>
            <p>Know and understand the condition of soil near your area.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageFeatured-PhotoCarousel"
            src="https://images.unsplash.com/photo-1564497417229-550e312643f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
            src={image2}
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
