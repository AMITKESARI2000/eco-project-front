import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import PhotoCarousel from './PhotoCarousel/PhotoCarousel';
import PredictPol from './Home Predict Pollution/PredictPol';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import SoilPollution from './Soil Pollution/SoilPollution';
import PreviewGame from './Home Games/PreviewGame';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <PhotoCarousel />
      <SoilPollution />
      <PredictPol />
      <PreviewGame />

      {/* FOOTER */}
      <ProjectFooter />
    </div>
  );
};

export default HomePage;
