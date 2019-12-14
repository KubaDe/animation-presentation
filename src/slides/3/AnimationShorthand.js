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
      <Text>Zapis skrócony animacji (shorthand)</Text>

      <ListWrapper width="95vw">
        <List>
          <ListItem size="sm">
            <code>{`animation: <name> <duration> <timing-function> <delay> <iteration-count>
    <direction> <fill-mode> <play-state>;`}</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
