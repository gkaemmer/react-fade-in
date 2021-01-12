### v0.0.1

- Initial version

### v0.1.5

- Prevent `setState` on unmounted `Fade` component. (thanks to @Themandunord)

### v0.1.6

- Added `delay` and `transitionDuration` props.

### v0.1.7

- Pass `className` prop through to container element. (thanks to @Deveosys)

### v0.1.8

- Add `childClassName` prop to allow styling for child divs. (thanks to @Deveosys)

### v1.0.0

- Use `transform: translateY(...)` instead of `position: relative` and `top` to animate elements. This is a breaking change if you rely on `position: relative` on the child divs. Thanks to [@bogdansoare](https://github.com/gkaemmer/react-fade-in/issues/8) for the suggestion.

### v1.1.0

- Add `wrapperTag` and `childTag` props. Thanks to [@domarp-j](https://github.com/domarp-j).

### v1.1.1

- Transition to `transform: none` instead of `transform: translateY(0)`. Thanks to [@atnpcg](https://github.com/atnpcg).

### v2.0.0

- Add `visible`, `onComplete` props. Rewrite component using typescript and react hooks. New children added after the initial render are now also animated.
