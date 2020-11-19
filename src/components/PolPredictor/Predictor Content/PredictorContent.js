import React from 'react';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';
import './PredictorContent.css';
import image1 from '../../../ProjectImage/soil logo.png';

const PredictorContent = ({setViewPage}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        <strong>Find Pollution Near You</strong>
      </Popover.Title>
      <Popover.Content>
        Helps you predict soil pollution through a series of questions
      </Popover.Content>
    </Popover>
  );
  return (
    <div className="container-PredictorContent ">
      <div className="sideBySide-PredictorContent">
        <div className="header-PredictorContent">
          <h2>Predict and Detect Pollution </h2>

          <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
            <Button variant="info" onClick={() => setViewPage (1)}>
              Predict Now!
            </Button>
          </OverlayTrigger>
        </div>
        <img
          className="image-PredictorContent"
          src={image1}
          style={{height: '600px', width: '700px'}}
          alt="First slide"
        />
      </div>
      <p className="text-PredictorContent">
        <h1>How this works?</h1>
        You just have to select an area and all the data will be presented in front of you.
        You will get to know about the probable deficiency of micronutrient like
        <strong> Nitrogen, Phosphorus, Potassium and Organic Carbon </strong>
        of the land in the selected area. It will also tell whether the soil is
        <strong>acidic or alkaline.</strong>
        After knowing this, you can also look into the probable
        {' '}
        <strong>causes and general solutions</strong>
        .
        {' '}
        For a more interactive way a general colour scheme is also added.

        {/* </p>
      <p className="text-PredictorContent"> */}
        <div style={{margin: '50px'}} />
        <h1>What Should You Do?</h1>
        After giving your location click on the accordion given on the page, you will see the
        {' '}
        <strong>causes and solutions </strong>
        for your situation, it will be crisp and short for more details search on the blogs given in the same accordion.
        {' '}
        you will also see the causes and solution in different color. explaining the Condition and importance of change like,
        {' '}
        {' '}
        <Button variant="success">Good Condition</Button>
        <Button variant="info">Normal Condition</Button>
        {' '}
        <Button variant="warning">Need Improvement</Button>
        {' '}
        and
        {' '}
        <Button variant="danger">Need immediate precautions</Button>
        . And we also have games to explain you about all the things related to N,P,K you can also check that out.
      </p>
    </div>
  );
};

export default PredictorContent;
