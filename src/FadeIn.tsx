import React, {
  Component,
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag: JSXElementConstructor<any>;
  childTag: JSXElementConstructor<any>;
  className: string;
  childClassName: string;
  out?: boolean;
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 50;
  const WrapperTag = props.wrapperTag || "div";
  const ChildTag = props.childTag || "div";

  useEffect(() => {
    let count = React.Children.count(props.children);
    if (props.out) {
      // Animate all children out
      count = 0;
    }
    if (count == maxIsVisible) {
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const interval = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [
    React.Children.count(props.children),
    delay,
    maxIsVisible,
    props.out,
    transitionDuration,
  ]);

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transform: maxIsVisible > i ? "none" : "translateY(20px)",
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
