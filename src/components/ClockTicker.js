import React, { Component } from "react";

class ClockTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60,
    };
  }

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
    const { time } = this.state;

    return (
      <div className="timer">
        <i className="fas fa-clock"></i> Time left: {time} seconds
      </div>
    );
  }
}

export default ClockTicker;


