import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import PhotoCarousel from './PhotoCarousel/PhotoCarousel';
import PredictPol from './Home Predict Pollution/PredictPol';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import SoilPollution from './Soil Pollution/SoilPollution';
import PreviewGame from './Home Games/PreviewGame';
import FunFacts from '../FunFacts/FunFacts';
import FunFactHome from './Home FunFact/FunFactHome';
import HomeMeme from './HomeMemes/HomeMeme';
import BlogHome from './BlogsHome/BlogsHome';

const HomePage = () => {
  return (
    <div>

      <NavigationBar />
      <PhotoCarousel />
      <SoilPollution />
      <FunFacts />
      <PredictPol />
      <FunFacts />
      <PreviewGame />
      <FunFacts />
      <BlogHome />
      <FunFacts />
      <HomeMeme />
      <FunFacts />
      <FunFactHome />
      <FunFacts />

      {/* FOOTER */}
      <ProjectFooter />

    </div>
  );
};

export default HomePage;
