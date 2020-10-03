import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import PhotoCarousel from './PhotoCarousel/PhotoCarousel';
import PredictPol from './Predict Pollution/PredictPol';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import SoilPollution from './Soil Pollution/SoilPollution';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <PhotoCarousel />
      <SoilPollution />
      <PredictPol />
      <ProjectFooter />
    </div>
  );
};

export default HomePage;
