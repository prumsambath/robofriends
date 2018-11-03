import React from 'react';
import Card from '../components/Card';

const CardList = ({ robots }) => {
  return robots.map(robot => <Card key={robot.id} robot={robot} />);
};

export default CardList;
