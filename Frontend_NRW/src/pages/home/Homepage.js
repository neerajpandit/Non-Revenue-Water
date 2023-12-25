import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import HomePage3 from './Features';

import Gallery from './Gallery';
import Footer from './Footer';
import WorkingProcess from '../consumerDashboard/aboutus/WorkingProcess';
import ProjectOverview from './ProjectOverview';


function Homepage() {
  return (
    <div>
        <Navbar />
        <Home />
        <ProjectOverview/>
        <HomePage3 />
        <WorkingProcess/>
        <Gallery />
        <Footer />
    </div>
  )
}

export default Homepage