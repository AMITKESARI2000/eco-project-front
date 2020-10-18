import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';


const PredictorQuestion = () => {
  return (
    <div className="container-PredictorContent ">
      <div className="sideBySide-PredictorContent">
        <div className="header-PredictorContent">
          <h2>Answer the questions </h2>
          <Button variant="info">Predict Now!</Button>{' '}
        </div>
        <img
          className="image-PredictorContent"
          src="https://images.unsplash.com/photo-1599394021759-afc65fd2eaaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1155&q=80"
          alt="First slide"
        />
      </div>

      <p className="text-PredictorContent">
        <h2>How this works?</h2>
      </p>
    </div>
  );
};

export default PredictorQuestion;
