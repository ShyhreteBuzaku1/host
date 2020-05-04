import React from 'react';
import Title from '../Title';
import styles from '../../css/services.module.css';
import customers from '../../constants/customers';
import img from '../../images/trusted-01.png';
const Customers = () => {
  return (
    <section className={styles.services}>
      <h4
        style={{
          fontSize: '17px',
          textTransform: ' uppercase',
          fontWeight: ' 600',
          color: '#1e1e1e',
          marginBottom: '50px',
          textAlign: 'center',
        }}
      >
        {' '}
        TRUSTED BY 1,250+ HAPPY CUSTOMERS WORLDWIDE
      </h4>
      <div className={styles.center}>
        {customers.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <img src={img} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
