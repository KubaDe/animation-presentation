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
      <Text light>transition-duration - Czas trwania tranzycji</Text>
      Możliwe wartości - przykłady:
      <ListWrapper>
        <List>
          <ListItem>
            <code>transition-duration: 3s;</code>
          </ListItem>
          <ListItem>
            <code>transition-duration: 300ms;</code>
          </ListItem>
          <br />
          Domyślnie: 0
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
