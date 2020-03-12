import React from 'react';
import { render } from 'react-dom';
import Hero from './Hero';
import SearchParams from './SearchParams'

const App = () => {
  return (
    <div>
      <h1>Hello, Universe!</h1>
      <SearchParams />
      <Hero name="Batman" powers="Super Intelligence" color="Black" />
      <Hero name="Superman" powers="Super Strength" color="Blue"/>
      <Hero name="The Flash" powers="Super Speed" color="Red"/>
      
    </div>
  );
};

render(
  React.createElement(App),
  document.getElementById("root")
)