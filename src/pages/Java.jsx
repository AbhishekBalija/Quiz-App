import React, { useState } from "react";
import { Link } from "react-router-dom";

const Java = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What is the size of int data type in Java?",
      options: ["4 bytes", "8 bytes", "16 bytes", "32 bytes"],
      correctAnswer: "4 bytes",
    },
    {
      question: "Which of these keywords is used to define interfaces in Java?",
      options: ["intf", "Intf", "interface", "Interface"],
      correctAnswer: "interface",
    },
    {
      question: "Which of the following is not a Java feature?",
      options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
      correctAnswer: "Use of pointers",
    },
    {
      question: "What is the default value of a boolean variable?",
      options: ["true", "false", "null", "0"],
      correctAnswer: "false",
    },
    {
      question: "Which method can be used to create an immutable class?",
      options: ["clone()", "copy()", "freeze()", "final"],
      correctAnswer: "final",
    },
  ];

  const handleAnswerSubmit = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container">
      {showScore ? (
        <div className="quiz-score">
          <div>
            You scored {score} out of {questions.length}
          </div>
          <button onClick={handleRestartQuiz} className="quiz-restart-button">
            Restart Quiz
          </button>
          <Link to="/" className="quiz-home-button">
            Return to Home
          </Link>
        </div>
      ) : (
        <>
          <h3 className="quiz-title">Java Quiz</h3>
          <div className="quiz-container">
            <p>
              Q{currentQuestion + 1}. {questions[currentQuestion].question}
            </p>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSubmit(option)}
                  className="quiz-button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="quiz-progress">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Java;
