import React from 'react';
import styles from './testimonials.module.css';
import { FaQuoteRight } from 'react-icons/fa';
const Testimonials = () => {
  return (
    <div
      style={{
        backgroundColor: ' #ececec',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="row">
          <div className="col-md-12">
            <span
              style={{
                color: ' #00bcd4',
                fontSize: '15px',
                fontWeight: '500',
                letterSpacing: '0.5px',
                display: ' inline-block',
                marginTop: '0px',
              }}
            >
              Testimonials
            </span>
            <h2>What they say about us</h2>
          </div>

          <div className="col-md-10 offset-md-1">
            <FaQuoteRight
              style={{
                width: '60px',
                height: ' 60px',
                display: 'inline - block',
                textAlign: 'center',
                lineHeight: '60px',
                color: '#fff',
                background: 'rgb(114,2,187)',
                background:
                  'linear-gradient(145deg, rgba(114,2,187,1) 0%, rgba(50,100,245,1) 100%)',
                borderRadius: '50%',
                fontSize: '18px',
                marginBottom: '45px',
              }}
            />
            <p>
              "Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat,
              rutrum ut malesuada."
            </p>
            <h4>William Smith</h4>
            <span>New Co-Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
