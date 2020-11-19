import React from 'react';
import './FunFactHome.css';
import image1 from '../../../ProjectImage/funFact.jpg';

const FunFactHome = () => {
  return (
    <div className="container-FunFactHome">
      <h2 className="header-FunFactHome">Fun Facts on soil</h2>
      <div className="sideBySide-FunFactHome">
        <p className="text-FunFactHome">
          Can you find a button saying
          {' '}
          <strong>“Wanna know a fun fact!!!”.</strong>
          {' '}
          If no, then find it.
          It is there in some places.
          If yes, then do you know what it is?
          If yes, it’s good otherwise check it.
          It will tell you some facts about Soil Pollution.
          Did you already know them? If yes, then write some
          {' '}
          <strong>blogs</strong>
          {' '}
          and share your ideas among others in the Blog Section.
        </p>
        <img
          className="image-FunFactHome"
          src={image1}
          alt="First slide"
          style={{width: '1000px', height: '700px'}}
        />
      </div>
    </div>
  );
};

export default FunFactHome;
