import React, { useState } from "react";
const QuestionBox = ({ question, options, selected }) => { // Add 'selected' prop here

  const [answers, setAnswer] = useState(options);

  return (
    <div className="questionBox">
      <div className="question">{question}</div>

      {answers.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text); // Pass the selected answer back to the parent component
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
