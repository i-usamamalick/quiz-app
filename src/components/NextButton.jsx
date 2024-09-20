import React from 'react';

export const NextButton = (props) => {
  const { onNext } = props;
  return (
    <div className='btnWrapper'>
        <button onClick={onNext}>Next Question</button>
    </div>
  );
};
