import React from "react";
import {Top, Container, Left, Center, Right} from './Style';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Top>
      <Container>
        <Left>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </Left>
        <Center>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </Center>
        <Right>
          <span>LOG IN</span>
        </Right>
      </Container>
    </Top>
  );
};

export default TopBar;
