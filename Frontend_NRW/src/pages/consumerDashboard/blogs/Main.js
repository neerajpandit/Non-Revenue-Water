import React, { useState } from 'react';
import '../css/Main.css';

const blogs = [
    {
        id: 1,
        image: '/img/blog-1.jpg',
        heading: 'Innovative Solutions for Sustainable Water Management',
        content: 'Explore our blogs to discover cutting-edge technologies, industry insights, and sustainable practices reshaping water management.',
        author: 'John Doe',
        authorImage:'/img/blog-author1.jpg',
        blogDesc:'/blog1',
      },
      {
        id: 2,
        image: '/img/blog2.jpeg',
        heading: 'Tackling Non-Revenue Water: A Digital Transformation',
        content: ' Delve into the world of digital methods and innovations, unraveling the mysteries of Non-Revenue Water and its conversion.',
        author: 'John Doe',
        authorImage:'/img/blog-author-2.jpg',
        blogDesc:'/blog2',
      },
      {
        id: 3,
        image: '/img/blog3.jpeg',
        heading: 'Environmental Stewardship in Water Utilities',
        content: 'Dive into articles that spotlight our commitment to reducing the environmental impact of water utilities through sustainable practices.',
        author: 'John Doe',
        authorImage:'/img/blog-author-3.jpg',
        blogDesc:'/blog3',
      },
      {
        id: 4,
        image: '/img/blog4.jpg',
        heading: 'Customer-Centric Water Solutions for Today and Tomorrow',
        content: 'Learn how our customer-focused approach is shaping the future of water management, ensuring reliability and satisfaction.',
        author: 'John Doe',
        authorImage:'/img/blog-author-4.jpg',
        blogDesc:'/blog4',
      },
      {
        id: 5,
        image: '/img/blog5.jpg',
        heading: 'Global Leadership in Water Management Practices',
        content: ' Discover how we lead the charge in setting new standards, influencing industry practices, and inspiring a global shift in water management.',
        author: 'John Doe',
        authorImage:'/img/blog-author-5.jpg',
        blogDesc:'/blog5',
      },
      {
        id: 6,
        image: '/img/blog6.jpg',
        heading: 'Empowering Communities: Water Wisdom for All',
        content: 'Explore stories of community empowerment, education, and collective action in preserving water resources and fostering sustainability.',
        author: 'John Doe',
        authorImage:'/img/blog-author-6.jpg',
        blogDesc:'/blog6',
      },
      {
        id: 7,
        image: '/img/blog5.jpg',
        heading: 'Profitable Water Management: From Non-Revenue to Revenue Transformation',
        content: 'Explore the transformative journey of water management, uncovering strategies to convert non-revenue water losses into profitable avenues.',
        author: 'John Doe',
        authorImage:'/img/blog-author-5.jpg',
        blogDesc:'/blog7',
      },
      // {
      //   id: 8,
      //   image: '/img/blog6.jpg',
      //   heading: 'Empowering Communities: Water Wisdom for All',
      //   content: 'Explore stories of community empowerment, education, and collective action in preserving water resources and fostering sustainability.',
      //   author: 'John Doe',
      //   authorImage:'/img/blog-author-6.jpg',
      //   blogDesc:'/blog8',
      // },
];

const ITEMS_PER_PAGE = 6;

const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <div>
      <img src={blog.image} alt={blog.heading} />
      <h2>{blog.heading}</h2>
      <p>{blog.content}<span><a href={blog.blogDesc}>  Read More..</a></span></p>
      <div className="author">
        <img src={blog.authorImage} alt={blog.author} />
        <span>{blog.author}</span>
      </div>
    </div>
  </div>
);

const Main= () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main">
      {/* <h1>Blog Section</h1> */}
      <div className="main-container">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {blogs.length > ITEMS_PER_PAGE && (
        <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={blogs.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;