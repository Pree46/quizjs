import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css"; // Check the path to your CSS file
import quizService from "./quizService/index.js"
import QuestionBox from "./components/Questionbox.js";
import Result from "./components/Result";

class QuizJS extends Component {
    state = {
        qBank: [],
        score: 0,
        responses: 0
    };
    getQuestions = () => {
        quizService().then( question => {
            this.setState({
                qBank: question
            });
        });
    }
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score +1
            });
        }
    this.setState({

        responses: this.state.responses < 5 ?  this.state.responses + 1 : 5

    });
    };

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        }
        );

    }
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
            <div className="container"> {/* Check that these class names match your CSS */}
                <div className="title">QuizJS</div>
                {this.state.qBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.qBank.map(({ question, answers, correct, questionID }) => (
                    <QuestionBox
                        question={question}
                        options={answers}
                        key={questionID}
                        selected={(answer) => this.computeAnswer(answer, correct)}
                    />
                    ))}


                {this.state.responses === 5 ? (<Result score={this.state.score}  playAgain={this.playAgain}/>) : null}
            </div>
        );
    }
}

ReactDOM.render(<QuizJS />, document.getElementById("root"));
