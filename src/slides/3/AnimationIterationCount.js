import React from "react";

import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  ListWrapper
} from "slideComponents";

const SlideView = () => {
  return (
    <Slide transition={["zoom"]}>
      <Heading>Animation</Heading>
      <Text light>animation-iteration-count - Ilość odtworzeń</Text>
      Możliwe wartości - przykłady:
      <ListWrapper width="80vw">
        <List>
          <ListItem>
            <code>animation-iteration-count: 3;</code>
          </ListItem>
          <ListItem>
            <code>animation-iteration-count: infinite;</code>
          </ListItem>
          <br />
          Domyślnie: 1
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
