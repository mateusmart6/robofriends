import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    return (
      <div>
        {robots.map((robot, index) => (
          <Card key={robot.id} 
          id={robot.id} 
          name={robot.name} 
          email={robot.email} />
        ))}
      </div>
    );
  };

export default CardList; 