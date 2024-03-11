import React, { useState } from 'react';
import { computerImage } from '../assets/images';
import Button from './Props/Button';

const DealsCard = () => {
  const deals = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <section className='deal-card--container'>
      <h1>Related deals you might like for</h1>
      <div className='deal-card--content'>
        <div className='deal-card-row'>
          {deals.map((dealIndex) => (
            <div className='deal-card' key={dealIndex}>
              <img src={computerImage} alt="Computer Image" className='desktop' />
              <div className='discount-section'>
                <span className='discount'>
                  <p>20% Off</p>
                  <p>Limited time</p>
                </span>
                <h4>Webbuilder {dealIndex}</h4>
                <p>Computer Modern classic with Wix support</p>
                <span className='discount-2'>
                  <h3>$39.96</h3>
                  <p>$49.96</p>
                  <p>(20% Off)</p>
                </span>
                <Button
                  className="deal-button"
                  label="View Deal"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DealsCard;
