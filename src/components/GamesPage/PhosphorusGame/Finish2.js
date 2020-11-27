import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Phosphorus from '../../../ProjectImage/PhosphorusImage.png';

class Finish extends Component {
  render () {
    return (
      <div style={{marginTop: '120px', marginLeft: '20rem'}}>
        <img src={Phosphorus} alt="Phosphorus" />

        <Link
          to="/Games"
          className="btn btn-danger"
          style={{marginLeft: '10rem', width: '10em', fontSize: '40px'}}
        >
          Finish
        </Link>

      </div>
    );
  }
}

export default Finish;
