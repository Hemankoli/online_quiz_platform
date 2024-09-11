import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [quiz] = useState({
    title: "Sample Quiz",
    questions: [
      {
        questionText: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
      },
      {
        questionText: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
      }
    ]
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion();
    }
  });

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <Result score={score} totalQuestions={quiz.questions.length} />
      ) : (
        <Quiz
          quiz={quiz}
          currentQuestion={currentQuestion}
          timeLeft={timeLeft}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};      

export default App;
