import React from 'react';

const Hero = ({name, powers, color }) => {
  return(
    <div>
      <h1>{name}</h1>
      <h3>{powers}</h3>
      <h3>{color}</h3>
    </div>
    )
}

export default Hero