import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../images/host.jpg';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toogleNav = () => {
    setNav((isOpen) => !isOpen);
  };
  console.log(isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toogleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        {/* <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </div> */}
        \
        <Link to="/about" className="btn-white" style={{ padding: '6px 20px' }}>
          Login
        </Link>
        <Link
          to="/about"
          className="btn-white"
          style={{
            backgroundColor: '#00bcd4',
            border: '2px solid #00bcd4',
            textTransform: ' uppercase',
            fontSize: '13px',
            color: ' #fff',
            padding: '6px 20px',
            letterSpacing: '0.5px',
            transition: 'all 0.5s',
          }}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
