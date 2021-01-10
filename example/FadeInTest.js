import React, { useState } from "react";
import FadeIn from "../lib";
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

export default function FadeInTest() {
  const [childCount, setChildCount] = useState(6);
  const [removeAll, setRemoveAll] = useState(false);
  return (
    <Container>
      <button onClick={() => setChildCount(childCount + 1)}>Add child</button>
      <button
        onClick={() => (childCount > 1 ? setChildCount(childCount - 1) : null)}
      >
        Remove child
      </button>
      <button onClick={() => setRemoveAll(!removeAll)}>
        Set out = {(!removeAll).toString()}
      </button>
      <Title>React Fade-In</Title>
      <FadeIn out={removeAll} onComplete={() => console.log("onComplete")}>
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With Delay</Title>
      <FadeIn out={removeAll} delay={300} transitionDuration={700}>
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With Class names</Title>
      <FadeIn out={removeAll} className="container" childClassName="child">
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With Custom Wrapper Tag (&lt;section&gt;)</Title>
      <FadeIn out={removeAll} wrapperTag="section">
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With Custom Child Tag (&lt;section&gt;)</Title>
      <FadeIn out={removeAll} childTag="section">
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
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
