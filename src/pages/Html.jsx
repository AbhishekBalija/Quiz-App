import React, { useState } from "react";
import { Link } from "react-router-dom";

const Html = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What is the correct HTML tag for a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<img>"],
      correctAnswer: "<a>",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<script>", "<style>", "<link>"],
      correctAnswer: "<style>",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question:
        "Which HTML attribute specifies an alternate text for an image?",
      options: ["src", "alt", "title", "href"],
      correctAnswer: "alt",
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
          <h3 className="quiz-title">HTML Quiz</h3>
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

export default Html;
