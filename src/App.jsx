import React, { useState } from 'react';
import { Question } from './components/Question';
import { Score } from './components/Score';
import { Result } from './components/Result';
import { NextButton } from './components/NextButton';

export const App = () => {
  const questions = [
    {
      question: 'What is the capital of Pakistan?',
      answers: ['Islamabad', 'Lahore', 'Karachi', 'Quetta'],
      correctAnswer: 0,
      qno: 1
    },
    {
      question: 'What is 2 + 2?',
      answers: ['3', '4', '5', '6'],
      correctAnswer: 1,
      qno: 2
    },
    {
      question: 'Which is heavier: a pound of cotton or a pound of iron?',
      answers: ['A pound of iron', 'A pound of cotton', 'Both have the same weight', 'None is heavier'],
      correctAnswer: 2,
      qno: 3
    },
    {
      question: 'If you pass the second person in a race, what position are you in now?',
      answers: ['1st', '2nd', '3rd', '4th'],
      correctAnswer: 1,
      qno: 4
    },
    {
      question: 'How many continents are there in total?',
      answers: ['1', '4', '3', '7'],
      correctAnswer: 3,
      qno: 5
    }
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null)); // Stores selected answers for all questions
  const [showResults, setShowResults] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleAnswerSelection = (answerIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);
    setAlertMessage(''); // Clear the alert when an answer is selected
  };

  const handleNextQuestion = () => {
    if (userAnswers[currentQuestionIndex] === null) {
      // No answer selected
      setAlertMessage('Please select an answer to proceed');
    } else {
      if (userAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 10);
        setCorrectAnswers(correctAnswers + 1);
      }

      // Move to next question or show results
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  return (
    <div className="quiz-container">
      <Score score={score} />
      {!showResults ? (
        <>
          <Question
            question={questions[currentQuestionIndex].question}
            answers={questions[currentQuestionIndex].answers}
            selectedAnswer={userAnswers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelection}
            questionNumber={questions[currentQuestionIndex].qno}
          />
          {alertMessage && <p className='alertMessage'>{alertMessage}</p>}
          <NextButton onNext={handleNextQuestion} />
        </>
      ) : (
        <Result score={score} correctAnswers={correctAnswers} totalQuestions={questions.length} />
      )}
    </div>
  );
};
