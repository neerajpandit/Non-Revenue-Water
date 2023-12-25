import React from 'react'
import "../css/WorkingProcess.css"
function WorkingProcess() {
  return (
    <div className='working-process'>
      <div className="working-container">
      <div className="working-icon">
        {/* <img className='tap' src='/img/tap-water.svg' alt='tap'></img> */}
        <img className='search' src='/img/SearchIcon.svg' alt='searchicon'></img>
      </div>
      <div className="headings">
        <h1 className="large-heading">WORKING PROCESS</h1>
        <h2 className="small-heading">working process</h2>
      </div>
    </div>
        
      <div className='steps'>
      <div className="steps-container">
        <div className="cards">
          <h2 className="card-heading" style={{ backgroundColor: '#575757' }}>
            1.Identify Issue
          </h2>
          <p className="card-paragraph">Assess water supply challenges, including source problems and intermittent supply.</p>
        </div>
        <div className="cards">
          <h2 className="card-heading" style={{ backgroundColor: '#F6B203' }}>
            2. Key Challenge
          </h2>
          <p className="card-paragraph">Recognize high water loss in distribution networks, specifically Non-Revenue Water (NRW).</p>
        </div>
        <div className="cards">
          <h2 className="card-heading" style={{ backgroundColor: '#9865F6' }}>
           3. Define Problem
          </h2>
          <p className="card-paragraph"></p>Specify NRW as the difference between input and recovered water, highlighting unreliable data.
        </div>
        <div className="cards">
          <h2 className="card-heading" style={{ backgroundColor: '#0C8AE4' }}>
            4. Objective
          </h2>
          <p className="card-paragraph">Address the issue with a digital system to trace and convert NRW into revenue water.</p>
        </div>
        <div className="cards">
          <h2 className="card-heading" style={{ backgroundColor: '#F34402' }}>
           5. Benefits
          </h2>
          <p className="card-paragraph">Emphasize water conservation, increased profitability, and improved return on investment for water distribution networks.</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default WorkingProcess