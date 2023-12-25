import React, { useState , useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/FeedbackForm.css'
import Navbar1 from '../Navbar1';
import Footer from '../Footer';
import axios from "axios";
const FeedbackForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const slideIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    from: { opacity: 0, transform: 'translateY(-100%)' },
    config: { duration: 1000 },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async() => {
    try {
      const response=await axios.post('http://127.0.0.1:8000/api/home/feedback/',formData)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Navbar1/>
      <div className='feedback-section'>
      <animated.h1 style={slideIn}>Give Us Your Feedback</animated.h1>
      <p>"Your feedback shapes our water solutions for global excellence."</p>
      </div>
      <div className='feedback'>
        <div className='feedback-img'>
        <img src='/img/feedback-img.png' alt='feed'></img>
        </div>
        <div className="feedback-form-container">
      <form onSubmit={handleSubmit}>
        <div className='field'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required/>
        </div>
        
       <div className='field'>
       <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
       </div>
        
        <div className='field'>
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          <option value=" ">Select Rating</option>
          <option value="excellent">5 - Excellent</option>
          <option value="good">4 - Good</option>
          <option value="average">3 - Average</option>
          <option value="below_average">2 - Below Average</option>
          <option value="poor">1 - Poor</option>
        </select>
        </div>
        
       <div className='field'>
       <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />
       </div>
        
       <div className='btn1'> 
       <button type="submit">Submit Feedback</button>
       </div>
        
      </form>
      </div>
      </div>
    <Footer/>
    </div>
  );
};

export default FeedbackForm;
