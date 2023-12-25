import React, { useState , useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/Complaint.css'; 
import '../css/Complaint.css';
import Navbar1 from '../Navbar1';
import Footer from '../Footer';
import axios from "axios";
const Complaint = () => {
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
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =async() => {
    try {
      const response=await axios.post('http://127.0.0.1:8000/api/home/contacts/',formData)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Navbar1/>
        <div className='complaint-section'>
        <animated.h1 style={slideIn}>File a Complaint</animated.h1>
        <p>"Speak up, let your concerns flow, water solutions follow."</p>
        </div>
        <div className='complaint'>
          <div className='complaint-img'>
            <img src='/img/complaint-img.png' alt='com'></img>
          </div>
        <div className="complaint-form-container">
      <form onSubmit={handleSubmit}> 
        <div className='field1'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
       
       <div className='field1'>
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
        
       <div className='field1'>
       <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
       </div>
        
       <div className='field1'>
       <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
       </div>
        <div className='btn'> <button type="submit">Submit Complaint</button></div>
       
      </form>
    </div>
        </div>
    <Footer/>
    </div>
  );
};

export default Complaint;
