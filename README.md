# react-fade-in
Dead-simple and opinionated component to fade in an element's children.

![React Fade In](/example/example.gif)

## Installation

`npm install react-fade-in`

## Usage

`react-fade-in` 

```
import FadeIn from 'react-fade-in';
// ...
<FadeIn>
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
  <div>Element 4</div>
  <div>Element 5</div>
  <div>Element 6</div>
</FadeIn>
```

## API

### `FadeIn`
Animates its children, one by one. Takes no props. To have things animate at different times, they must be first-level children of the `<FadeIn>` component (i.e. members of `props.children`).

Happy fading.
