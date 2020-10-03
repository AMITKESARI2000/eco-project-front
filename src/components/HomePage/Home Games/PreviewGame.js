import React from 'react';
import './PreviewGame.css';

const PreviewGame = () => {
  return (
    <div className="container-PreviewGame">
      <h2 className="header-PreviewGame">Interactive Games</h2>
      <div className="sideBySide-PreviewGame">
        <img
          className="image-PreviewGame"
          src="https://images.unsplash.com/photo-1599394021759-afc65fd2eaaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1155&q=80"
          alt="First slide"
        />
        <p className="text-PreviewGame">
          dummy text ====\/ Why React-Bootstrap? React-Bootstrap is a complete
          re-implementation of the Bootstrap components using React. It has no
          dependency on either bootstrap.js or jQuery. If you have React setup
          React's virtual DOM. Below are a few examples of how React-Bootstrap
          components differ from Bootstrap. A Simple React Component # The CSS
          and details of Bootstrap components are rather opinionated and
          lengthy. React-Bootstrap simplifies this by condensing the original
          Bootstrap into React-styled components. Why React-Bootstrap?
          React-Bootstrap is a complete re-implementation of the Bootstrap
          components using React. It has no dependency on either bootstrap.js or
          jQuery. If you have React setup and DOM. In this way, React-Bootstrap
          provides a more reliable solution by incorporating Bootstrap
          functionality into React's virtual DOM. Below are a few examples of
          how React-Bootstrap components differ from Bootstrap. A Simple React
          Component # The CSS and details of Bootstrap components are rather
          opinionated and lengthy. React-Bootstrap simplifies this by condensing
          the original Bootstrap into React-styled components.
        </p>
      </div>
    </div>
  );
};

export default PreviewGame;
