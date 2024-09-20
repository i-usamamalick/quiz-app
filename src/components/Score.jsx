import React from 'react';

export const Score = (props) => {
  const { score } = props;
  return <div className="score">Score: {score}</div>;
};
