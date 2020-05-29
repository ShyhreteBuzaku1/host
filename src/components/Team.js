import React from 'react';
import '../css/teamCard.css';
import { Button } from 'react-bootstrap';

const Team = (props) => (
  <div className="itemCard">
    <div className="team">
      <img src={props.image} alt="" />
    </div>{' '}
    <h2>{props.title}</h2>
    <p>
      Stadium: <strong> {props.stadiumName}</strong>
    </p>
    <div>
      <Button
        variant="info"
        onClick={() => {
          alert(props.title);
        }}
      >
        View
      </Button>
    </div>
  </div>
);

export default Team;
