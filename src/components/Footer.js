import React from 'react';
import styles from '../css/footer.module.css';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          );
        })}
      </div> */}
      <div class="container">
        <div class="row " style={{ textAlign: 'left' }}>
          <div class="col-md-3">
            {' '}
            <h4>About Us</h4>{' '}
            <p>
              Host Cloud is provided by TemplateMo for free of charge. Anyone can download and use
              this CSS Bootstrap template for commercial purposes.
            </p>
          </div>
          <div class="col-md-3">
            {' '}
            <h4>Hosting Plans</h4>
            <p>Basic Cloud 5X</p>
            <p>Cloud VPS 10X</p>
            <p>Advanced Cloud</p>
            <p>Custom Designs</p>
          </div>
          <div class="col-md-3">
            {' '}
            <h4>Useful Links</h4>
            <p>Cloud Hosting Platform</p>
            <p>Light Speed Zone</p>
            <p>Content Delivery Network</p>
            <p>Customer Support</p>
          </div>
          <div class="col-md-3">
            {' '}
            <h4>More Information</h4>
            <p>Phone:010-020-0560 </p>
            <p>Email:mail@company.com </p>
            <p>Support:support@company.com </p>
            <p>Customer Support</p>
          </div>
        </div>

        <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url} tearget="_blank">
                {item.icon}
              </a>
            );
          })}
        </div>
        <div className={styles.copyright}>
          {' '}
          copyright &copy; Apollo company {new Date().getFullYear()}. all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
