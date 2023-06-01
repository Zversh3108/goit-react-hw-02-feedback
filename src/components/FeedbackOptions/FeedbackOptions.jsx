import React, { Component } from 'react';
import { Button } from './FeedbackOptions.Styled';
import PropTypes from 'prop-types';
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
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
}
