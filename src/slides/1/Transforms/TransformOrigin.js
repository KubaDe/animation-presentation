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
      <Text light>Transform Origin</Text>
      Możliwe wartości - przykłady:
      <ListWrapper>
        <List>
          <ListItem>
            <code>transform-origin: 20% 40%;</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
