import React, { useState } from 'react';
import '../css/PastSessions.css';

const blogs = [
  {
    id: 1,
    image: '/img/blog-1.jpg',
    heading: 'Innovative Solutions for Sustainable Water Management',
    author: 'John Doe',
    authorDesc:'Software Engineer 3, Google',
    authorImage:'/img/blog-author1.jpg',
    attendees:'71 Attendees',
    sessionLink:'https://www.youtube.com/embed/Fcb7GjgZcYc?si=7HyVoSE1UMcdbbYB',
  },
  {
    id: 2,
    image: '/img/blog2.jpeg',
    heading: 'Tackling Non-Revenue Water: A Digital Transformation',
    author: 'John Doe',
    authorDesc:'Software Engineer 3, Google',
    authorImage:'/img/blog-author-2.jpg',
    attendees:'82 Attendees',
    sessionLink:'https://www.youtube.com/embed/Fcb7GjgZcYc?si=7HyVoSE1UMcdbbYB',
  },
  {
    id: 3,
    image: '/img/blog3.jpeg',
    heading: 'Environmental Stewardship in Water Utilities',
    author: 'John Doe',
    authorDesc:'Software Engineer 3, Google',
    authorImage:'/img/blog-author-3.jpg',
    attendees:'56 Attendees',
    sessionLink:'https://www.youtube.com/embed/Fcb7GjgZcYc?si=7HyVoSE1UMcdbbYB',
  },
  {
    id: 4,
    image: '/img/blog4.jpg',
    heading: 'Customer-Centric Water Solutions for Today and Tomorrow',
    author: 'John Doe',
    authorDesc:'Software Engineer 3, Google',
    authorImage:'/img/blog-author-4.jpg',
    attendees:'82 Attendees',
    sessionLink:'https://www.youtube.com/embed/Fcb7GjgZcYc?si=7HyVoSE1UMcdbbYB',
  },
];

const BlogCard = ({ blog, onCardClick }) => (
  <div className="blog-card" onClick={() => onCardClick(blog)}>
    <img src={blog.image} alt={blog.heading} />
    <h2>{blog.heading}</h2>
    <div className="author">
      <img src={blog.authorImage} alt={blog.author} />
      <div className='author-desc'>
      <span>{blog.author}</span>
      <p>{blog.authorDesc}</p>
      </div>
    </div>
    <div className="attendees">
     <span>{blog.attendees}</span>
     <a href={blog.sessionLink}>Watch Sessions &#x2192;</a>
    </div>
  </div>
);


const PastSessions= () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="past">
      <div className="past-headings">
        <h1 className="pastlarge-heading">PAST SESSIONS</h1>
        <h2 className="pastsmall-heading">PAST SESSIONS</h2>
      </div>
      <div className="pastblog-container">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onCardClick={handleCardClick} />
        ))}
      </div>
      {selectedBlog && <BlogDetails blog={selectedBlog} />}
    </div>
  );
};

const BlogDetails = ({ blog }) => (
  <div>
    <h2>{blog.heading}</h2>
    <div className="author">
      <img src={blog.authorImage} alt={blog.author} />
      <div className='author-desc'>
      <span>{blog.author}</span>
      <p>{blog.authorDesc}</p>
      </div>
    </div>
    <div className="attendees">
     <span>{blog.attendees}</span>
     <a href={blog.sessionLink}>Watch Sessions &#x2192;</a>
    </div>
  </div>
);

export default PastSessions;