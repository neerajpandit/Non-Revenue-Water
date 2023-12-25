import React, { useState , useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/FAQ.css'; 
import Navbar1 from '../Navbar1';
import Footer from '../Footer';

const FAQ = () => {

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

  const faqs = [
    {
      question: "1. What is Non-Revenue Water (NRW), and why is it a significant challenge in water management?",
      answer: "NRW is the difference between the amount of water put into the distribution system and the amount recovered from consumers. It serves as an indicator of water utility performance, highlighting issues such as leaks and losses in the distribution network.",
    },
    {
      question:"2. How does the water management app help in reducing Non-Revenue Water (NRW)?",
      answer:"The app employs advanced digital methods to trace and tackle water losses in distribution networks, converting non-revenue water into revenue water. It aims to enhance the efficiency of water utilities, minimize losses, and increase overall profitability.",
    },
    {
      question:"3. What technologies are utilized to address water supply issues and improve water utility performance? ",
      answer:" The app leverages cutting-edge technologies, such as data analytics, smart sensors, and digital monitoring, to optimize water distribution networks, ensure a reliable water supply, and enhance the performance of water utilities. ",
    },
    {
      question:"4. How can the app contribute to environmental sustainability in water management?",
      answer:"The app is designed with a commitment to environmental responsibility. By minimizing water losses and adopting sustainable practices, it aims to reduce the environmental impact of water utilities, contributing to the preservation of natural ecosystems.",
    },
    {
      question:"5. What information does the app provide regarding water quality and supply at the consumer's end?",
      answer:"The app offers transparent communication about water quality, supply, and ongoing initiatives. Consumers can access accurate information, empowering them to make informed decisions about their water usage. ",
    },
    {
      question:"6.  How does the app prioritize customer satisfaction and consumer empowerment?",
      answer:"The app is customer-centric, with a focus on exceeding expectations and ensuring consumer satisfaction. It provides tools for consumers to actively manage their water consumption, fostering awareness and responsibility within communities. ",
    },
    {
      question:"7. Is the app compatible with existing water management systems used by utilities?",
      answer:"Yes, the app is designed to integrate seamlessly with existing water management systems. It is adaptable and can enhance the capabilities of current systems, providing an added layer of efficiency and innovation.  ",
    },
    // {
    //   question:"8. How does the app address challenges related to the accuracy of Non-Revenue Water (NRW) data?",
    //   answer:" The app employs advanced data analytics to address challenges related to the accuracy of NRW data. It ensures that information is reliable, transparent, and provides a comprehensive view of water utility performance.",
    // },
    // {
    //   question:"9.  What steps can water utilities take to implement the app and optimize their water distribution networks?",
    //   answer:"Implementing the app involves a straightforward process of integration and customization based on the specific needs of the water utility. Our team provides comprehensive support to ensure a smooth transition and optimal utilization of the app. ",
    // },
    // {
    //   question:"10. How does the app contribute to the global effort in reshaping water management practices?",
    //   answer:"The app is designed to be a leader in the global effort to reshape water management. By setting new standards, influencing industry practices, and inspiring positive change, it aims to contribute to a sustainable and water-secure future on a global scale.",
    // },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Navbar1/>
       <div className='faq-section'>
         <animated.h1 style={slideIn}>Frequently Asked Questions</animated.h1>
         <p>"Explore answers, embrace clarity, water wisdom for all."</p>
        </div>
        <div className='faq'>
          <div className='faq-img'>
            <img src='/img/faq-vector1.png' alt='faq'></img>
          </div>
        <div className="faq-container"> 
      {faqs.map((faq, index) => (
        <div key={index} className="faqItem">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {/* {openIndex === index ? `&darr;` : `&gt;`} */}
            <div dangerouslySetInnerHTML={{ __html: openIndex === index ? '&#x2228;' : '&gt;' }} />

          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
        </div>
     <Footer/>
    </div>
  );
};

export default FAQ;
