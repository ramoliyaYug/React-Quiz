// src/Result.js
import React from 'react';

const Result = ({ score }) => {
  let resultText = '';
  let resultClass = '';

  if (score <= 70) {
    resultText = 'Low EQ';
    resultClass = 'low';
  } else if (score <= 140) {
    resultText = 'Average EQ';
    resultClass = 'average';
  } else {
    resultText = 'High EQ';
    resultClass = 'high';
  }

  return (
    <div>
      <h1>Your EQ Score: {score}</h1>
      <p className={`result ${resultClass}`}>{resultText}</p>
    </div>
  );
};

export default Result;
