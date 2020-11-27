import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import nitrogen from '../../../ProjectImage/NitrogenImage.png';

class Finish extends Component {
  render () {
    return (
      <div style={{marginTop: '120px', marginLeft: '20rem'}}>
        <img src={nitrogen} alt="nitrogen" />

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
