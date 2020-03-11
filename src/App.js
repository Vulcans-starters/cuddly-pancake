import React from 'react';
import { render } from 'react-dom'

function App() {
  return (
    React.createElement("div", {}, React.createElement("h1", {}, "hello Universe!"));
  )
};

render(React.createElement(App), document.getElementById("root"))