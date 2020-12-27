import React from 'react';
import './BlogHome.css';
import image1 from '../../../ProjectImage/blogsImage1.jpg';

const BlogHome = () => {
  return (
    <div className="container-BlogHome">
      <h2 className="header-BlogHome">Helpful Blogs</h2>
      <div className="sideBySide-BlogHome">
        <img
          className="image-BlogHome"
          src={image1}
          alt="First slide"
        />
        <p className="text-BlogHome">
          Are you a studious person? Or you love to read and write blogs?
          Or you want to know others thinking about this problem?
          Or you want to share your ideas?
          Then this is the perfect place for you.
          Go ahead and see some blogs written by others and also share your ideas by
          {' '}
          <strong>writing</strong>
          {' '}
          your own blog.
        </p>
      </div>
    </div>
  );
};

export default BlogHome;
