// LevelSelection.js
import React from "react";

const LevelSelection = ({ onSelectLevel }) => {
  return (
    <div className="level-selection">
      <h2>Select a Difficulty Level</h2>
      <button onClick={() => onSelectLevel("easy")}>Easy</button>
      <button onClick={() => onSelectLevel("medium")}>Medium</button>
      <button onClick={() => onSelectLevel("hard")}>Hard</button>
    </div>
  );
};

export default LevelSelection;
