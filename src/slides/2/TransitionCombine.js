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
      <Text>Łączenie tranzycji</Text>

      <ListWrapper width="95vw">
        <List>
          <ListItem size="sm">
            <code>{`transition: <property1>, <property2>,... <duration> <timing-function> <delay>;`}</code>
          </ListItem>
        </List>
      </ListWrapper>
      <ListWrapper width="95vw">
        <List>
          <ListItem size="sm">
            <code>{`transition-property: <property1>, <property2>;`}</code>
            <br />
            <code>{`transition-duration: <duration1>, (<duration2>);`}</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
