import React from 'react';
import './PredictPol.css';
import image1 from '../../../ProjectImage/pImage3.jpg';

const PredictPol = () => {
  return (
    <div className="container-PredictPol">
      <h2 className="header-PredictPol">Pollution Predict</h2>
      <div className="sideBySide-PredictPol">
        <img
          className="image-PredictPol"
          src={image1}
          alt="First slide"
        />
        <p className="text-PredictPol">
          This will tell whether the soil is deficient in any
          {' '}
          micronutrients like
          <strong>
            Nitrogen, Phosphorus, Potassium and Organic Carbon.
          </strong>
          It will also tell whether the soil is
          {' '}
          <strong> acidic or alkaline.</strong>{' '}

          {' '}
          You just have to select the area and all the data will be presented on the screen.
          {' '}
          Not only that, It will also provide you with probable
          {' '}
          <strong>causes</strong>
          {' '}
          and general
          {' '}
          <strong>solutions</strong>
          {' '}
          to make the soil healthy for the plants.
        </p>
      </div>
    </div>
  );
};

export default PredictPol;
