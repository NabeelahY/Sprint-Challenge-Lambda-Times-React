import React from 'react';
import { HeaderSection, Date, Temp } from './Style';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderSection>
      <Date className="date">SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp className="temp">98°</Temp>
    </HeaderSection>
  )
}

export default Header