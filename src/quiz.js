// src/Quiz.js
import React, { useState } from 'react';
import './App.css'; // Ensure styles are applied

const questions = [
    {
        questionText: 'How do you handle criticism?',
        options: [
          { answerText: 'Use it to improve', score: 20 },
          { answerText: 'Consider it but move on', score: 15 },
          { answerText: 'Feel defensive', score: 10 },
          { answerText: 'Ignore it', score: 5 },
        ],
      },
      {
        questionText: 'When stressed, what’s your go-to response?',
        options: [
          { answerText: 'Take a break', score: 20 },
          { answerText: 'Talk to someone', score: 15 },
          { answerText: 'Work through it', score: 10 },
          { answerText: 'Avoid the issue', score: 5 },
        ],
      },
      {
        questionText: 'How do you make decisions?',
        options: [
          { answerText: 'Based on facts', score: 20 },
          { answerText: 'Consult others', score: 15 },
          { answerText: 'Go with my gut', score: 10 },
          { answerText: 'Procrastinate', score: 5 },
        ],
      },
      {
        questionText: 'How do you respond to new ideas?',
        options: [
          { answerText: 'Embrace and explore them', score: 20 },
          { answerText: 'Evaluate cautiously', score: 15 },
          { answerText: 'Skeptical but open', score: 10 },
          { answerText: 'Dismiss them quickly', score: 5 },
        ],
      },
      {
        questionText: 'How do you manage your emotions?',
        options: [
          { answerText: 'Stay balanced and calm', score: 20 },
          { answerText: 'Express them appropriately', score: 15 },
          { answerText: 'Suppress them often', score: 10 },
          { answerText: 'Struggle to control them', score: 5 },
        ],
      },
      {
        questionText: 'What’s your approach to conflict?',
        options: [
          { answerText: 'Address it directly', score: 20 },
          { answerText: 'Seek a compromise', score: 15 },
          { answerText: 'Avoid it if possible', score: 10 },
          { answerText: 'Escalate it quickly', score: 5 },
        ],
      },
      {
        questionText: 'How do you feel about routine?',
        options: [
          { answerText: 'Comfortable and secure', score: 20 },
          { answerText: 'Indifferent', score: 15 },
          { answerText: 'Bored but manage', score: 10 },
          { answerText: 'Uncomfortable and restless', score: 5 },
        ],
      },
      {
        questionText: 'How do you deal with setbacks?',
        options: [
          { answerText: 'Learn and adapt', score: 20 },
          { answerText: 'Persist with effort', score: 15 },
          { answerText: 'Feel discouraged', score: 10 },
          { answerText: 'Give up easily', score: 5 },
        ],
      },
      {
        questionText: 'How do you react to unexpected events?',
        options: [
          { answerText: 'Stay calm and plan', score: 20 },
          { answerText: 'Adapt as needed', score: 15 },
          { answerText: 'Feel anxious initially', score: 10 },
          { answerText: 'Panic and struggle', score: 5 },
        ],
      },
      {
        questionText: 'How do you balance work and personal life?',
        options: [
          { answerText: 'Maintain a clear boundary', score: 20 },
          { answerText: 'Manage with effort', score: 15 },
          { answerText: 'Struggle to keep balance', score: 10 },
          { answerText: 'Neglect personal life', score: 5 },
        ],
      },
];

const Quiz = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (scoreValue) => {
    const newScore = score + scoreValue;
    setScore(newScore);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onQuizComplete(newScore);
    }
  };

  const progressPercentage = ((currentQuestion) / questions.length) * 100;

  return (
    <div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <h2>{questions[currentQuestion].questionText}</h2>
      <div>
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option.answerText}
            onClick={() => handleAnswerButtonClick(option.score)}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
