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
      <Text>Zapis skrócony tranzycji (shorthand)</Text>

      <ListWrapper width="95vw">
        <List>
          <ListItem size="sm">
            <code>{`transition: <property> <duration> <timing-function> <delay>;`}</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
