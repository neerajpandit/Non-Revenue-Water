import React, { useState } from 'react';
import '../css/UpcomingSessions.css';

const blogs = [
  {
    id: 1,
    image: '/img/blog-1.jpg',
    heading: 'Innovative Solutions for Sustainable Water Management',
    author: 'John Doe',
    authorDesc:'Software Engineer 3, Google',
    authorImage:'/img/blog-author1.jpg',
    dateTime: '2023-12-25T12:00:00Z', 
  },
  {
    id: 2,
    image: '/img/blog2.jpeg',
    heading: 'Tackling Non-Revenue Water: A Digital Transformation',
    author: 'John Doe',
    authorDesc:'Software Engineer 3, Google',
    authorImage:'/img/blog-author-2.jpg',
    dateTime: '2023-12-25T12:00:00Z',
  },
  {
    id: 3,
    image: '/img/blog3.jpeg',
    heading: 'Environmental Stewardship in Water Utilities',
    author: 'John Doe',
    authorDesc:'Software Engineer 3, Google',
    authorImage:'/img/blog-author-3.jpg',
    dateTime: '2023-12-25T12:00:00Z',
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
    <div className="date-time">
      <img src='/img/cal-icon.png' alt='cal'></img>
      <span>{formatDateTime(blog.dateTime)}</span>
    </div>
  </div>
);

const formatDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateTimeString).toLocaleString('en-US', options);
  };

const UpcomingSessions= () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="upcoming">
      <div className="upcoming-headings">
        <h1 className="upcominglarge-heading">UPCOMING SESSIONS</h1>
        <h2 className="upcomingsmall-heading">UPCOMING SESSIONS</h2>
      </div>
      <div className="upcomingblog-container">
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
    <div className="date-time">
    <img src='/img/cal-icon.png' alt='cal'></img>
      <span>{formatDateTime(blog.dateTime)}</span>
    </div>
  </div>
);

export default UpcomingSessions;