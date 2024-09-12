import React from 'react';
import '../App.css';


const Result = ({ score, totalQuestions }) => {
  return (
      <div className="result">
        
        <h2>Your Score</h2>
        
        <p>{score} out of {totalQuestions}</p>
        
        {/* FORMULA */}
        <p>{((score / totalQuestions) * 100).toFixed(2)}%</p>
      </div>
  );
};

export default Result;
