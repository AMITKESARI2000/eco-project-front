import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';


const PredictorQuestion = ({setViewPage}) => {
    const handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
      }
    
  return (
    <div className="container-PredictorContent ">
          <a  onClick={() => setViewPage(0) } style={{textDecoration:"underline"}}>Back</a>
      <div className="sideBySide-PredictorContent">
        <div className="header-PredictorContent">
          <h2>Answer the questions </h2>
          <form>
        <label>
            {/* ADD ALL THE FORM FIELD ETC */}
          Is going:
          <input
            name="isGoing"            type="checkbox"
            // checked={this.state.isGoing}
            onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"            type="number"
            // value={this.state.numberOfGuests}
            onChange={handleInputChange} />
        </label>
      </form>
        </div>
        <img
          className="image-PredictorContent"
        //   src="https://images.unsplash.com/photo-1599394021759-afc65fd2eaaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1155&q=80"
          alt="pic"
        />
        <Map/>
      </div>

     
    </div>
  );
};

export default PredictorQuestion;
