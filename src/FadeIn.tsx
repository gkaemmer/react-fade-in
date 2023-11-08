import React, { JSXElementConstructor, PropsWithChildren, useEffect, useState } from 'react';

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => any;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = typeof props.transitionDuration === 'number' ? props.transitionDuration : 400;
  const delay = typeof props.delay === 'number' ? props.delay : 50;
  const WrapperTag = props.wrapperTag || 'div';
  const ChildTag = props.childTag || 'div';
  const visible = typeof props.visible === 'undefined' ? true : props.visible;

  useEffect(() => {
    let count = React.Children.count(props.children);
    if (!visible) {
      // Animate all children out
      count = 0;
    }

    if (count == maxIsVisible) {
      // We're done updating maxVisible, notify when animation is done
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    // Move maxIsVisible toward count
    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
  }, [React.Children.count(props.children), delay, maxIsVisible, visible, transitionDuration]);

  function getTranslateValue() {
    switch (props.direction) {
      case 'down':
        return 'translateY(-20px)';
      case 'left':
        return 'translateX(20px)';
      case 'right':
        return 'translateX(-20px)';
      default:
        return 'translateY(-20px)';
    }
  }

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transform: maxIsVisible > i ? 'none' : getTranslateValue(),
              opacity: maxIsVisible > i ? 1 : 0
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
