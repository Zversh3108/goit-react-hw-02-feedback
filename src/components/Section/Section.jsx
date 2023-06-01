import React, { Component } from 'react';
import { Container } from './Section.Styled';
export class Section extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </Container>
    );
  }
}
