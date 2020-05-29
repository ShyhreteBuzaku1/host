import React, { useState } from 'react';
import Layout2 from '../components/Layout2';
import SimpleHero2 from '../components/SimpleHero2';
import { Link } from 'gatsby';
import Banner from '../components/Banner';
import { Dropdown } from 'react-bootstrap';
import Team from '../components/Team';
import data from '../constants/team.json';

const Contact = () => {
  const [itemType, setItemType] = useState('all');
  return (
    <Layout2>
      <SimpleHero2>
        <Banner title="Contact us" info="lorem ipsum">
          <Link to="/about" className="btn-white">
            Explore About
          </Link>
        </Banner>
      </SimpleHero2>
      <div className="container">
        <div className="buttonHolder">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Football Club Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setItemType('all')}> All</Dropdown.Item>
              <Dropdown.Item onClick={() => setItemType('Premier League')}>
                {' '}
                Premier League
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setItemType('Serie A')}> Serie A</Dropdown.Item>
              <Dropdown.Item onClick={() => setItemType('LaLiga')}> LaLiga</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="clubContainer">
          {data.map((item, key) => {
            return itemType === 'all' || item.type === itemType ? (
              <Team
                key={key}
                image={item.image}
                title={item.title}
                stadiumName={item.stadiumName}
              />
            ) : (
              <></>
            );
          })}
        </div>
      </div>

      <></>
    </Layout2>
  );
};
export default Contact;
