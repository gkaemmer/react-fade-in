import React, { useEffect, useState } from "react";
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

function DynamicChild({ start }) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    const timeout = setTimeout(() => setCount(count + 1), 100);
    return () => clearTimeout(timeout);
  }, [count]);
  return <div>Count: {count}</div>;
}

export default function FadeInTest() {
  const [childCount, setChildCount] = useState(6);
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      <button onClick={() => setChildCount(childCount + 1)}>Add child</button>
      <button
        onClick={() => (childCount > 1 ? setChildCount(childCount - 1) : null)}
      >
        Remove child
      </button>
      <Title>React Fade-In</Title>
      <FadeIn onComplete={() => console.log("onComplete")}>
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With `visible` prop</Title>
      <button onClick={() => setVisible(!visible)}>
        Set visible = {(!visible).toString()}
      </button>
      <FadeIn visible={visible} onComplete={() => console.log("onComplete")}>
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With dynamic child</Title>
      <FadeIn delay={300} transitionDuration={700}>
        {[...Array(childCount).keys()].map((i) => (
          <DynamicChild start={i * 1000} />
        ))}
      </FadeIn>
      <Title>With Delay</Title>
      <FadeIn delay={300} transitionDuration={700}>
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With Class names</Title>
      <FadeIn className="container" childClassName="child">
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With Custom Wrapper Tag (&lt;section&gt;)</Title>
      <FadeIn wrapperTag="section">
        {[...Array(childCount).keys()].map((i) => (
          <Element>Element {i + 1}</Element>
        ))}
      </FadeIn>
      <Title>With Custom Child Tag (&lt;section&gt;)</Title>
      <FadeIn childTag="section">
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
