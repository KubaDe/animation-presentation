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
      <Text light>animation-play-state - pauzowanie animacji</Text>
      Możliwe wartości: <code>animation-play-state</code>:
      <ListWrapper width="90vw">
        <List>
          <ListItem dot><code>paused </code> - wstrzymanie animacji</ListItem>
          <ListItem dot><code>running </code> - odtwarzanie animacji</ListItem>
          <br />
          Domyślnie: running
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
