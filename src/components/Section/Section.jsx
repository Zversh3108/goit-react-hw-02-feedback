import React, { Component } from 'react';
import { Container } from './Section.Styled';
import PropTypes from 'prop-types';
export class Section extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </Container>
    );
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}
