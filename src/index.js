import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css"; // Check the path to your CSS file
import quizService from "./quizService/index.js"
import QuestionBox from "./components/Questionbox.js";

class QuizJS extends Component {
    state = {
        qBank: []
    };
    getQuestions = () => {
        quizService().then( question => {
            this.setState({
                qBank: question
            });
        });
    }
    computeAnswer = (answer, correctAnswer) => {
        if (answer == correctAnswer) {
            this.setState({
                score: this.state.score +1
            })
        }
    }
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
            <div className="container"> {/* Check that these class names match your CSS */}
                <div className="title">QuizJS</div>
                {this.state.qBank.length > 0 && this.state.qBank.map(({question, answers, 
                correct, questionID}) => 
                <QuestionBox 
                question={question} 
                options={answers} 
                key={questionID}
                selected={answer => this.computeAnswer(answer, correct)}/>
                )}
            </div>
        );
    }
}

ReactDOM.render(<QuizJS />, document.getElementById("root"));
