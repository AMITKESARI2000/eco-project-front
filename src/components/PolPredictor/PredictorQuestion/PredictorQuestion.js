import React from 'react';
import DataDropDown from '../DataDropDown/DataDropDown';


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
      <a onClick={() => setViewPage(0)} style={{ textDecoration: 'underline' }}>
        Back
      </a>
      <div className="sideBySide-PredictorContent">
        <div>
          <h2 className="header-PredictorContent">Answer the questions </h2>
          <DataDropDown />
        </div>
        {/* <img
          className="image-PredictorContent"
          //   src="https://images.unsplash.com/photo-1599394021759-afc65fd2eaaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1155&q=80"
          alt="pic"
<<<<<<< HEAD
        />
        <Map/>
=======
        /> */}
        MAP HERE
>>>>>>> 3c9e93fab4db4b5b936ec0dcf65a7523421bf499
      </div>
    </div>
  );
};

export default PredictorQuestion;
