import "./PricingCardStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar-line"> </span>
          <p className="btc">30,000 PHP</p>
          <p>- 1 week -</p>
          <p>- 3 pages max -</p>
          <p>- Minimalist Design -</p>
          <p>- Mobile Responsive -</p>
          <Link to="/contact" className="btn btn-price">
            AVAIL NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar-line"> </span>
          <p className="btc">40,000 PHP</p>
          <p>- 2 weeks -</p>
          <p>- 7 pages max-</p>
          <p>- Slightly Complexed Design -</p>
          <p>- Mobile Responsive -</p>
          <Link to="/contact" className="btn btn-price">
            AVAIL NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Business -</h3>
          <span className="bar-line"> </span>
          <p className="btc">50,000 PHP</p>
          <p>- 1 month -</p>
          <p>- 10 pages max -</p>
          <p>- Complexed/Featured Design -</p>
          <p>- Mobile Responsive -</p>
          <Link to="/contact" className="btn btn-price">
            AVAIL NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
