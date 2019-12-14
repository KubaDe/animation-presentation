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
      <Heading>Transition</Heading>
      <Text light>transition-delay - Opóźnienie</Text>
      Możliwe wartości - przykłady:
      <ListWrapper width="80vw">
        <List>
          <ListItem>
            <code>transition-delay: 300ms;</code>
          </ListItem>
          <ListItem>
            <code>transition-delay: 2s;</code>
          </ListItem>
          <br />
          Domyślnie: 0
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
