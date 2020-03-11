const App = () => {
  return (
    React.createElement("div", {}, React.createElement("h1", {}, "hello Universe!"));
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"))