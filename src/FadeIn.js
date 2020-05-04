import React, { useEffect, useState } from "react";

export default ({
  children,
  className,
  childClassName,
  delay = 50,
  transitionDuration = 400,
}) => {
  const [maxIsVisible, setMaxIsVisible] = useState(0);

  useEffect(() => {
    const childrenCount = React.Children.count(children);
    const interval = setInterval(() => {
      setMaxIsVisible((count) => {
        if (count >= childrenCount) clearInterval(interval);

        return count + 1;
      });
    }, delay);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => {
        return (
          <div
            className={childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transform: `translateY(${maxIsVisible > i ? 0 : 20}px)`,
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
