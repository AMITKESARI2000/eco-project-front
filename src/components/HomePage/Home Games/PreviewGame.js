import React from 'react';
import './PreviewGame.css';
import image1 from '../../../ProjectImage/GameImage.jpg';

const PreviewGame = () => {
  return (
    <div className="container-PreviewGame">
      <h2 className="header-PreviewGame">Interactive Games</h2>
      <div className="sideBySide-PreviewGame">
        <img
          className="image-PreviewGame"
          src={image1}
          alt="First slide"
          style={{width: '1000px', height: '700px'}}
        />
        <p className="text-PreviewGame">
          We think
          {' '}
          <strong>Games</strong>
          {' '}
          are the most easier way to learn about something.
          {' '}
          So, here we present you some games which are strictly related to this.
          {' '}
          By playing these you will get some knowledge about this field.
          Learning while playing is really cool!!!
          Don’t you think?
          So, what you are waiting for. Go Ahead and play to learn.
        </p>
      </div>
    </div>
  );
};

export default PreviewGame;
