import React from 'react';
import styles from './cards.module.css';
import cards from '../constants/feature';
import img from '../images/feature-01.png';
const Feature = () => {
  return (
    <>
      <div class=" container" style={{ marginTop: '60px' }}>
        <div class="col-md-12">
          <div class="section-heading" style={{ textAlign: 'center' }}>
            <span>Best Quality for you</span>
            <h2>Cloud Features</h2>
          </div>
        </div>
        <div class="row " style={{ display: 'inline-flex' }}>
          {cards.map((item, index) => {
            return (
              <div class="col-md-6">
                {' '}
                <div
                  style={{
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                    borderRadius: '5px',
                    padding: ' 30px',
                    marginBottom: '30px',
                    display: 'flex',
                  }}
                >
                  <img
                    src={img}
                    style={{ maxWidth: '80px', marginRight: '30px', height: '60px' }}
                  ></img>{' '}
                  <div>
                    {' '}
                    <h4>{item.title}</h4> <p>{item.text}</p>{' '}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feature;
