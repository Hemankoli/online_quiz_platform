import React from 'react';
import '../App.css';
import { CiStopwatch } from "react-icons/ci";



const Quiz = ({ quiz, currentQuestion, timeLeft, handleAnswerOptionClick }) => {
  return (
    <div className="quiz">
      <div className='title'>
        <h2>{quiz.title}</h2>
        <h3 className='timestamp'>
          <CiStopwatch className='watch' /> 
          {timeLeft}s
        </h3>
      </div>
      <div className="question-section">
        <h3>{quiz.questions[currentQuestion].questionText}</h3>
        <div className="options">
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
