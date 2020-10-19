import React from 'react';
<<<<<<< HEAD
import {Button, Container, Col, Row} from 'react-bootstrap';
import DataDropDown from '../DataDropDown/DataDropDown';

const PredictorQuestion = ({setViewPage}) => {
  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState ({
      [name]: value,
    });
  };

  return (
    <div className="container-PredictorContent ">
      <a onClick={() => setViewPage (0)} style={{textDecoration: 'underline'}}>
        Back
      </a>
      <div className="sideBySide-PredictorContent">
        <div className="header-PredictorContent">
          <h2>Answer the questions </h2>
=======
import DataDropDown from '../DataDropDown/DataDropDown';

const PredictorQuestion = ({ setViewPage }) => {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  return (
    <div className="container-PredictorContent ">
      <a onClick={() => setViewPage(0)} style={{ textDecoration: 'underline' }}>
        Back
      </a>
      <div className="sideBySide-PredictorContent">
        <div>
          <h2 className="header-PredictorContent">Answer the questions </h2>
>>>>>>> cba56b1e4cc6fd085a07271d33b4b65434a4dd11
          <DataDropDown />
        </div>
        {/* <img
          className="image-PredictorContent"
          //   src="https://images.unsplash.com/photo-1599394021759-afc65fd2eaaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1155&q=80"
          alt="pic"
        /> */}
        MAP HERE
      </div>
<<<<<<< HEAD

=======
>>>>>>> cba56b1e4cc6fd085a07271d33b4b65434a4dd11
    </div>
  );
};

export default PredictorQuestion;
