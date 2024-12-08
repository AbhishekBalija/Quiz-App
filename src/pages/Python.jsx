import React, { useState } from "react";
import { Link } from "react-router-dom";

const Python = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "Which keyword is used to create a function in Python?",
      options: ["function", "define", "def", "func"],
      correctAnswer: "def",
    },
    {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".pyt", ".pt", ".python"],
      correctAnswer: ".py",
    },
    {
      question: "How do you write a comment in Python?",
      options: ["// Comment", "/* Comment */", "# Comment", "-- Comment"],
      correctAnswer: "# Comment",
    },
    {
      question: "Which method is used to add an element to a list?",
      options: ["append()", "add()", "insert()", "push()"],
      correctAnswer: "append()",
    },
    {
      question: "What is the output of `print(2 * 3 ** 2)`?",
      options: ["18", "36", "12", "6"],
      correctAnswer: "18",
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
          <h3 className="quiz-title">Python Quiz</h3>
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

export default Python;
