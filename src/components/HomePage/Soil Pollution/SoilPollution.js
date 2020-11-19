import React from 'react';
import './SoilPollution.css';
import image1 from '../../../ProjectImage/pImage2.jpg';

const SoilPollution = () => {
  return (
    <div className="container-SoilPollution">
      <h2 className="header-SoilPollution">Soil Pollution</h2>
      <div className="sideBySide-SoilPollution">
        <img
          className="image-SoilPollution"
          src={image1}
          alt="First slide"
          style={{width: '1100px', height: '700px'}}
        />
        <p className="text-SoilPollution">

          Hello Buddies, this is a website that contains
          {' '}
          <strong>
            Soil Pollution Predictor, Games, Blogs, Memes and other useful facts
            {' '}
          </strong>
          to create awareness about Soil Pollution.
          From the time of the Green Revolution pesticide usage increased very rapidly.
          {' '}
          From small organisms to we humans, all are facing the adverse side effects of these pesticides.
          {' '}
          This website will provide a little but important knowledge and solutions to this soil pollution especially targeting the agricultural land.

        </p>

      </div>
    </div>
  );
};

export default SoilPollution;
