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
      <Heading>Stany elementów interaktywnych</Heading>
      <Text light>{"<input/>"} przykłady</Text>
      <ListWrapper width="90vw" maxHeight="60vh">
        <List>
          <ListItem><code> input:checked</code> - zaznaczony checkbox</ListItem>
          <ListItem><code> input:disabled</code> - zablokowany</ListItem>
          <ListItem><code> input:focus</code> - posiada focus</ListItem>
          <ListItem><code> input:valid</code> - input with valid value</ListItem>
          <ListItem>&nbsp;</ListItem>
          <ListItem><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">Pełna lista</a></ListItem>

        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
