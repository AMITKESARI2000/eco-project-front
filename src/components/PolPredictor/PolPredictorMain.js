import React, { useState } from 'react';

import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import PredictorContent from './Predictor Content/PredictorContent';
import PredictorQuestion from './PredictorQuestion/PredictorQuestion';

const PolPredictorMain = () => {
  const [viewPage, setViewPage] = useState(1);
  function renderPage() {
    switch (viewPage) {
      case 0:
        return <PredictorContent />;
      case 1:
        return <PredictorQuestion />;
      default:
        return <PredictorContent />;
    }
  }
  return (
    <div>
      <NavigationBar />
      
      {renderPage()}

      <ProjectFooter />
    </div>
  );
};

export default PolPredictorMain;
