import React, { useState } from 'react';

import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import PredictorContent from './Predictor Content/PredictorContent';
import PredictorQuestion from './PredictorQuestion/PredictorQuestion';

//import DataDropDown from './DataDropDown/DataDropDown';

const PolPredictorMain = () => {
  const [viewPage, setViewPage] = useState(0);
  function renderPage() {
    // setViewPage(1)
    switch (viewPage) {
      case 0:
        return <PredictorContent setViewPage={setViewPage} />;
      case 1:
        return <PredictorQuestion setViewPage={setViewPage}/>;
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
