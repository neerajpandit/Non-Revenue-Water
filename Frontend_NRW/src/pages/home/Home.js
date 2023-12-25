import React from 'react';
import './css/Home.css';
import CheckGreen from '../home/Assets/checkGreen.svg';
import iphone from './Assets/nrw-main.png';

const Home = () => {
  return (
    <div className='home-background'>
      <div className='hero-section'>
        <div className='home-heading2'>

          <h2 className='home-heading'>Digital NRW Solution</h2>
          <h2 className='home-mddle-p'>Unlocking Potential <br /> In Every Droplet</h2>

          <div className='home-box'>
            <ul>
              <li>
                <p>
                  <div className="box-row">
                    <div>
                      <img src={CheckGreen} alt='Check Green' />
                    </div>
                    <div>
                      Advance metering infrastructure
                    </div>
                  </div>
                </p>
              </li>
              <li>
                <p>
                  <div className="box-row">
                    <img src={CheckGreen} alt='Check Green' />
                    <div>Connect to expert</div>
                  </div>
                </p>
              </li>
            </ul>
            <ul className='ul-left'>
              <li>
                {' '}
                <p>
                  <div className="box-row">
                    <img src={CheckGreen} alt='Check Green' />
                    <div> Bill and revenue manager</div>
                  </div>

                </p>
              </li>
              <li>
                <p>
                  <div className="box-row">
                    <img src={CheckGreen} alt='Check Green' />
                    <div>
                      Live Monitoring
                    </div>
                  </div>

                </p>
              </li>
            </ul>
          </div>

        </div>
        <div className='iphone-img'>
          <img src={iphone} alt='iPhone' />
        </div>

      </div>
    </div>
  );
};

export default Home;