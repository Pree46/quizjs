import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService/index.js";
import QuestionBox from "./components/Questionbox.js";
import Result from "./components/Result";
import LevelSelection from "./components/LevelSelection";
import ClockTicker from "./components/ClockTicker"; // Import the ClockTicker component

class QuizJS extends Component {
  constructor(props) {
    super(props);
    this.timerRef = React.createRef(); // Create a ref for the Timer component
  }
  state = {
    qBank: {
      easy: [],
      medium: [],
      hard: [],
    },
    score: 0,
    responses: 0,
    currentLevel: null, // Initialize currentLevel as null
  };

  // Load questions for all levels
  getQuestions = () => {
    quizService().then((questions) => {
      const qBank = {
        easy: [],
        medium: [],
        hard: [],
      };

      questions.forEach((question) => {
        switch (question.level) {
          case "easy":
            qBank.easy.push(question);
            break;
          case "medium":
            qBank.medium.push(question);
            break;
          case "hard":
            qBank.hard.push(question);
            break;
          default:
            break;
        }
      });

      this.setState({
        qBank,
      });
    });
  };

  // Compute the answer
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses:
        this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  // Change the difficulty level
  changeLevel = (level) => {
    this.setState({
      currentLevel: level,
      score: 0,
      responses: 0,
    });
    this.getQuestions();
  };

  playAgain = () => {
    this.changeLevel(null); // Set currentLevel to null to show the level selection page
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    const { currentLevel, score, responses, qBank } = this.state;
    const questions = qBank[currentLevel];

    return (
      <div className="container">
        {currentLevel === null ? (
          <div className="title">
            <h1>QuizJS</h1>
            <LevelSelection onSelectLevel={this.changeLevel} />
          </div>
        ) : (
          <>
            {responses < 5 && (
              <div className=".timer">
                <ClockTicker /> {/* Add the ClockTicker component */}
              </div>
            )}
            {questions.length > 0 && responses < 5 && (
              <>
                {questions.map(({ question, answers, correct, questionID }) => (
                  <QuestionBox
                    key={questionID}
                    question={question}
                    options={answers}
                    selected={(answer) => this.computeAnswer(answer, correct)}
                  />
                ))}
              </>
            )}
            {responses === 5 ? (
              <Result
                score={score}
                playAgain={this.playAgain}
                timeTaken={
                  this.timerRef.current ? this.timerRef.current.getTimeTaken() : 0
                }
              />
            ) : null}
          </>
        )}
      </div>
    );
  }
}

ReactDOM.render(<QuizJS />, document.getElementById("root"));
