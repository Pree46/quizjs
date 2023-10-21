import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 60,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    }
  };

  render() {
    return <div className="timer">Time left: {this.state.time} seconds</div>;
  }
}

export default Timer;
