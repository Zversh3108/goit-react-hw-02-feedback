import React, { Component } from 'react';
import { Button } from './FeedbackOptions.Styled';
export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option, index) => (
          <Button
            key={index}
            type="button"
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </Button>
        ))}
      </>
    );
  }
}
