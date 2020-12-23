import React from 'react';
import './HomeMeme.css';
import image1 from '../../../ProjectImage/pImage6.jpg';

const HomeMeme = () => {
  return (
    <div className="container-HomeMeme">
      <h2 className="header-HomeMeme">Informative Memes</h2>
      <div className="sideBySide-HomeMeme">
        <img
          className="image-HomeMeme"
          src={image1}
          alt="First slide"
        />
        <p className="text-HomeMeme">
          Do you love memes?
          Can you find anyone who does not like memes? No, right.
          Memes are ideas, typically humorous in nature, which are spread rapidly by people.
          {' '}
          So, here we created some memes strictly related to this field.
          See them, if you find it
          {' '}
          <strong>funny and knowledgeable</strong>
          , then spread it and let others gain some knowledge in a funny way.
        </p>
      </div>
    </div>
  );
};

export default HomeMeme;
