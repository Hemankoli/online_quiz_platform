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
      },
      {
        questionText: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
      },
      {
        questionText: "Who wrote 'Hamlet'?",
        options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "J.K. Rowling"],
        correctAnswer: "William Shakespeare"
      },
      {
        questionText: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
        correctAnswer: "Oxygen"
      },
      {
        questionText: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
      },
      {
        questionText: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
      },
      {
        questionText: "What is the capital of Japan?",
        options: ["Kyoto", "Tokyo", "Osaka", "Nagoya"],
        correctAnswer: "Tokyo"
      },
      {
        questionText: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correctAnswer: "Mount Everest"
      },
      {
        questionText: "Which country is the largest by land area?",
        options: ["China", "United States", "Russia", "Canada"],
        correctAnswer: "Russia"
      }
    ]
  });
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (quizStarted && timeLeft === 0) {
      handleNextQuestion();
    }
  });

  const handleStartQuiz = () => {
    // Reset the quiz state
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(10);
    setShowResult(false);
  };

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
        <div>
          <Result score={score} totalQuestions={quiz.questions.length} />

          <button onClick={handleStartQuiz} className="start-button">
            Start Quiz
          </button>
        </div>
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
