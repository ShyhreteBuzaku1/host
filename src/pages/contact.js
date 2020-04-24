import React from 'react';
import Layout2 from '../components/Layout2';
import SimpleHero2 from '../components/SimpleHero2';
import { Link } from 'gatsby';
import Banner from '../components/Banner';
const contact = () => {
  return (
    <Layout2>
      <SimpleHero2>
        <Banner title="Contact us" info="lorem ipsum">
          <Link to="/about" className="btn-white">
            Explore About
          </Link>
        </Banner>
      </SimpleHero2>
    </Layout2>
  );
};
export default contact;
