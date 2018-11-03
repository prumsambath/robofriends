import React from 'react';

const Card = props => {
  const { id, name, email } = props.robot;
  let imageSrc = `https://robohash.org/${id}.png?size=200x200`;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div className="title" />
      <div className="detail">
        <img alt="robot" src={imageSrc} />
        <h3>{name}</h3>
        <a href="#">{email}</a>
      </div>
    </div>
  );
};

export default Card;
