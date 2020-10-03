import React from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';

import PredictorContent from './Predictor Content/PredictorContent';

const PolPredictor = () => {
  return (
    <div>
      <NavigationBar />
      <PredictorContent />

      <ProjectFooter />
    </div>
  );
};

export default PolPredictor;
