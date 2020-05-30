import React, { Component } from "react";
import FadeIn from "../src/index";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Helvetica, Arial, sans-serif;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 2em;
  margin: 10px 0;
`;

const Element = styled.div`
  line-height: 1.5em;
`;

export default class FadeInTest extends Component {
  render() {
    return (
      <Container>
        <Title>React Fade-In</Title>
        <FadeIn>
          <Element>Element 1</Element>
          <Element>Element 2</Element>
          <Element>Element 3</Element>
          <Element>Element 4</Element>
          <Element>Element 5</Element>
          <Element>Element 6</Element>
        </FadeIn>
        <Title>With Delay</Title>
        <FadeIn delay={300} transitionDuration={700}>
          <Element>Element 1</Element>
          <Element>Element 2</Element>
          <Element>Element 3</Element>
          <Element>Element 4</Element>
          <Element>Element 5</Element>
          <Element>Element 6</Element>
        </FadeIn>
        <Title>With Class names</Title>
        <FadeIn className="container" childClassName="child">
          <Element>Element 1</Element>
          <Element>Element 2</Element>
          <Element>Element 3</Element>
          <Element>Element 4</Element>
          <Element>Element 5</Element>
          <Element>Element 6</Element>
        </FadeIn>
        <Title>With Custom Wrapper Tag (&lt;section&gt;)</Title>
        <FadeIn wrapperTag="section">
          <Element>Element 1</Element>
          <Element>Element 2</Element>
          <Element>Element 3</Element>
          <Element>Element 4</Element>
          <Element>Element 5</Element>
          <Element>Element 6</Element>
        </FadeIn>
        <Title>With Custom Child Tag (&lt;section&gt;)</Title>
        <FadeIn childTag="section">
          <Element>Element 1</Element>
          <Element>Element 2</Element>
          <Element>Element 3</Element>
          <Element>Element 4</Element>
          <Element>Element 5</Element>
          <Element>Element 6</Element>
        </FadeIn>
        <style>{`
          .container {
            border: 1px solid blue;
          }
          .child {
            color: red;
          }
        `}</style>
      </Container>
    );
  }
}
