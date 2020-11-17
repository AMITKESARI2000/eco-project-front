import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectFooter.css';
import ReactPlayer from 'react-player';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {AiFillHeart} from 'react-icons/ai';

const ProjectFooter = () => {
  return (
    <div className="ProjectFooter">
      <div className="container-fluid wrapper">
        <div className="row top">
          <div className="quickLinks col-md-2">
            <p className="techhub">
              <strong>IIT TIRUPATI</strong>
            </p>
            <div className=" lower-three bt">
              <p>© 2020 Project Team</p>
            </div>
          </div>
          <div className="cont col-md-10 col-12">
            <div className="all ">
              <Link to="/">Home</Link>
              <Link to="/Events">Events</Link>
            </div>

            <div className="all ">
              <Link to="/Projects">Projects</Link>
              <Link to="/Blogs">Blogs</Link>
            </div>
            <div className="all ">
              <Link to="/Blogs">Challenges</Link>
              <Link to="/Events/Competitions">Competitions</Link>
            </div>

            <div className="all">
              <Link to="/aboutus">Team</Link>
              <Link
                to="/Events/CalendarEvents"
                className="CalendarLink-ProjectFooter"
              >
                Calendar
              </Link>
            </div>
            <div className="all">
              <Link to="/">Support</Link>
            </div>
          </div>

        </div>
        <br />
        <div className="row bottom">
          <div className="col-sm-2 lower-one bt">
            <div className="row connect">CONNECT WITH US</div>
            <div className=" row icons">
              <div className="icn youtube">
                <FaYoutube />
              </div>
              <div className="icn">
                <FaInstagram />
              </div>
              <div className="icn">
                <FaFacebook />
              </div>
            </div>
          </div>
          <div className="col-sm-6 lower-two bt">
            MADE WITH{' '}
            <p className="heart">
              <AiFillHeart style={{position: 'relative', top: '0.35vw'}} />
            </p>{' '}
            BY <strong> DESH KI MITTI SE JUDE LOG </strong> 2020-21

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectFooter;
