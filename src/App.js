// src/App.js
import React, { useState } from 'react';
import Quiz from './quiz.js';
import Result from './result.jsx';
import './App.css'; // Import the CSS file

const App = () => {
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setIsQuizComplete(true);
  };

  return (
    <div className="container">
      <h1>Emotional Quotient (EQ) Quiz</h1>
      {isQuizComplete ? (
        <Result score={score} />
      ) : (
        <Quiz onQuizComplete={handleQuizComplete} />
      )}
    </div>
  );
};

export default App;
