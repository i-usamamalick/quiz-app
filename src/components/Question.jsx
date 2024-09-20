import React from 'react';

export const Question = (props) => {
  const { question, selectedAnswer, answers, onAnswerSelect, questionNumber } = props;

  return (
    <div>
      <h2>{questionNumber}. {question}</h2>
      <form>
        {answers.map((answer, index) => (
          <div key={index} className='optionWrapper'>
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(index)}
            />
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </div>
        ))}
      </form>
    </div>
  );
};
