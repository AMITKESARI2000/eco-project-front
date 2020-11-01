import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import './PredictorContent.css';

const PredictorContent = ({ setViewPage }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        <strong>Amazing</strong> content
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
            <Button variant="info" onClick={() => setViewPage(1)}>
              Predict Now!
            </Button>
          </OverlayTrigger>
        </div>
        <img
          className="image-PredictorContent"
          src="https://images.unsplash.com/photo-1568598034003-ec897abcb5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
      </div>
      {/* <Container className="buttons-PredictorContent">
        <Row>
          <Col sm>
            <Button variant="info">Predictor</Button>{' '}
            It will help you to predict pollution at your place
          </Col>
          <Col sm>
            <Button variant="success">General Prevention</Button>{' '}
            Some suggestions to reduce pollution
          </Col>
          <Col sm>
            <Button variant="warning">General Causes</Button>{' '}
            Some possible reasons why 
          </Col>
        </Row>
      </Container>  */}
      <p className="text-PredictorContent">
        <h2>How this works?</h2>
        dummy text ====\/ Why React-Bootstrap? React-Bootstrap is a complete
        re-implementation of the Bootstrap components using React. It has no
        dependency on either bootstrap.js or jQuery. If you have React setup and
        React-Bootstrap installed, you have everything you need. Methods and
        events using jQuery is done imperatively by directly manipulating the
        DOM. In contrast, React uses updates to the state to update the virtual
        DOM. In this way, React-Bootstrap provides a more reliable solution by
        incorporating Boots components are rather opinionated and lengthy.
        React-Bootstrap DOM. In this way, React-Bootstrap provides a more
        reliable solution by incorporating Bootstrap functionality into React's
        virtual DOM. Below are a few examples of how React-Bootstrap components
        differ from Bootstrap. A Simple React Component # The CSS and details of
        Bootstrap components are rather opinionated and lengthy. React-Bootstrap
        simplifies this by condensing the original Bootstrap into React-styled
        components. Why React-Bootstrap? React-Bootstrap is a complete
        re-implementation of the Bootstrap components using React. It has no
        dependency on either bootstrap.js or jQuery. If you have React setup and
        DOM. In this way, React-Bootstrap provides a more reliable solution by
        incorporating Bootstrap functionality into React's virtual DOM. Below
        are a few examples of how React-Bootstrap components differ from
        Bootstrap. A Simple React Component # The CSS and details of Bootstrap
        components are rather opinionated and lengthy. React-Bootstrap
        simplifies this by condensing the original Bootstrap into React-styled
        components.
      </p>
      <p className="text-PredictorContent">
        <h2>Soil Pollution due to fertilizers</h2>
        dummy text ====\/ Why React-Bootstrap? React-Bootstrap is a complete
        re-implementation of the Bootstrap components using React. It has no
        dependency on either bootstrap.js or jQuery. If you have React setup and
        React-Bootstrap installed, you have everything you need. Methods and
        events using jQuery is done imperatively by directly manipulating the
        DOM. In contrast, React uses updates to the state to update the virtual
        DOM. In this way, React-Bootstrap provides a more reliable solution by
        incorporating Boots components are rather opinionated and lengthy.
        React-Bootstrap DOM. In this way, React-Bootstrap provides a more
        reliable solution by incorporating Bootstrap functionality into React's
        virtual DOM. Below are a few examples of how React-Bootstrap components
        differ from Bootstrap. A Simple React Component # The CSS and details of
        Bootstrap components are rather opinionated and lengthy. React-Bootstrap
        simplifies this by condensing the original Bootstrap into React-styled
        components. Why React-Bootstrap? React-Bootstrap is a complete
        re-implementation of the Bootstrap components using React. It has no
        dependency on either bootstrap.js or jQuery. If you have React setup and
        DOM. In this way, React-Bootstrap provides a more reliable solution by
        incorporating Bootstrap functionality into React's virtual DOM. Below
        are a few examples of how React-Bootstrap components differ from
        Bootstrap. A Simple React Component # The CSS and details of Bootstrap
        components are rather opinionated and lengthy. React-Bootstrap
        simplifies this by condensing the original Bootstrap into React-styled
        components.
      </p>
    </div>
  );
};

export default PredictorContent;
