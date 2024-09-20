import React from 'react';

export const Result = (props) => {
  const { score, correctAnswers, totalQuestions } = props;
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your final score is: {score}</p>
      <p>You answered {correctAnswers} questions correctly out of {totalQuestions} questions!</p>
    </div>
  );
};
