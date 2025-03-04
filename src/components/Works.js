import React from 'react';
import kick_pop_send from '../img/kick-pop-send.png';
import rocket_punch from '../img/rocket-punch.png';

function Works() {
  return (
    <section id="works" className="works-section">
      <h2>Works</h2>
      <div className="works-container">
        <div className="work-item">
          <div className="work-image-container">
            <img src={kick_pop_send} alt="Kick Pop Send" className="work-image" />
          </div>
          <div className="work-details">
            <h3>Kick Pop Send</h3>
            <p>楽しいパズルゲームに挑戦して！</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-image-container">
            <img src={rocket_punch} alt="Rocket Punch" className="work-image" />
          </div>
          <div className="work-details">
            <h3>Rocket Punch</h3>
            <p>パズルゲームをベースにしたユニークな</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;