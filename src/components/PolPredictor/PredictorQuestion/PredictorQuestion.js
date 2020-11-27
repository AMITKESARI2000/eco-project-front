import React from 'react';

import DataDropDown from '../DataDropDown/DataDropDown';

const PredictorQuestion = ({setViewPage}) => {
  return (
    <div className="container-PredictorContent ">
      <a onClick={() => setViewPage (0)} style={{textDecoration: 'underline'}}>
        Back
      </a>
      <div className="sideBySide-PredictorContent">
        <div>
          <h2 className="header-PredictorContent" style={{fontSize: '5rem'}}>
            Select Your State and District
          </h2>

          <DataDropDown />
        </div>

      </div>

    </div>
  );
};

export default PredictorQuestion;
