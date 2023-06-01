import React, { Component } from 'react';
import { List } from './Statistics.Styled';
export class Statistics extends Component {
  render() {
    return (
      <div>
        <List>
          <li>Good: {this.props.good}</li>
          <li>Neutral: {this.props.neutral}</li>
          <li>Bad: {this.props.bad}</li>
          <li>Total:{this.props.total}</li>
          <li>
            Positive feedback:{' '}
            {this.props.total > 0 ? this.props.positivePercentage : 0}%
          </li>
        </List>
      </div>
    );
  }
}
