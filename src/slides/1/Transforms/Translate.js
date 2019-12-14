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
      <Heading>Transform</Heading>
      <Text light>Translate - Repozycjonowanie elementu</Text>
      Możliwe wartości:
      <ListWrapper>
        <List>
          <ListItem>
            <code>transform: translate(x, y);</code>
          </ListItem>
          <ListItem>
            <code>transform: translateX(x);</code>
          </ListItem>
          <ListItem>
            <code>transform: translateY(y);</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
