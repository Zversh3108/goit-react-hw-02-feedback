import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statisticks';
import { Notification } from '../Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasFeedback: false,
  };
  options = Object.keys(this.state);
  handlerButtonFeedback = evt => {
    const stateKey = evt.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
        hasFeedback: true,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    const { good, neutral, bad, hasFeedback } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handlerButtonFeedback}
          />
        </Section>
        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
