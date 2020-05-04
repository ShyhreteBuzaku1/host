import React from 'react';
import styles from './cards.module.css';
import cards from '../constants/cards';

const Cards = () => {
  return (
    <>
      <div class="container">
        <div style={{ margin: '50px 50px 0px 50px' }}>
          <span>Hosting Services</span>
          <h2>Services we provide</h2>
          <p>
            Host Cloud is a professional Bootstrap 4 template by TemplateMo for your hosting company
            websites. There are 4 HTML pages included in this template. You can feel free to
            customize anything. Please share this template to your friends. Thank you.
          </p>
        </div>
        <section className={styles.services}>
          <div className={styles.center}>
            {cards.map((item, index) => {
              return (
                <article key={index} className={styles.service}>
                  <span
                    style={{
                      color: '#fff',
                      backgroundColor: '#00bcd4',
                      display: 'inline-block',
                      width: '100px',
                      height: ' 100px',
                      lineHeight: '100px',
                      textAlign: 'center',
                      borderRadius: '50%',
                      fontSize: '32px',
                    }}
                  >
                    {item.icon}
                  </span>
                  <h4>{item.title}</h4>
                  <img>{item.image}</img>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cards;
