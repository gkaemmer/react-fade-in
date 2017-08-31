import React, { Component } from "react";

export default class FadeIn extends Component {
  state = {
    maxIsVisible: 0
  };

  componentDidMount() {
    const count = React.Children.count(this.props.children);
    var customLag = parseInt(this.props.lag) ? parseInt(this.props.lag) : 50;
    let i = 0;
    this.interval = setInterval(() => {
      i++;
      if (i > count)
        clearInterval(this.interval);

      this.setState({ maxIsVisible: i });
    }, customLag);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const duration = 0.4;
    const delay = this.props.delay;
    return (
      <div>
        {React.Children.map(this.props.children, (child, i) => {
          return (
            <div
              style={{
                transition: `opacity ${duration}s, top ${duration}s`,
                'transition-delay': delay,
                position: "relative",
                top: this.state.maxIsVisible > i ? 0 : 20,
                opacity: this.state.maxIsVisible > i ? 1 : 0
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }
}
