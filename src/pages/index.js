import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';

import Services from '../components/Home/Services';
import Customers from '../components/Home/Customers';
import Testimonials from '../components/Home/Testimonials';
import Cards from '../components/Cards';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="SEARCH YOUR DOMAIN" info="lorem ipsum">
        <Link to="/about" className="btn-white">
          Explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <Customers />
    <Cards />
    <Pricing />
    <Feature />
    <Testimonials />
    {/* <Services /> */}
  </Layout>
);
