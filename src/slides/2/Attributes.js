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
      <Text>Atrybuty służące do definiowania tranzycji</Text>
      <ListWrapper width="90vw">
        <List>
          <ListItem>
            <code>transition-duration</code>* - Mówi o tym, jak długo ma trwać
          </ListItem>
          <ListItem>
            <code>transition-property</code> - Mówi o tym, co ma się animować
          </ListItem>
          <ListItem>
            <code>transition-delay</code> - Mówi o tym, ile poczekać przed startem
          </ListItem>
          <ListItem>
            <code>transition-timing-function</code> - Mówi o tym, jak przebiega zmiana
          </ListItem>
          <br />
          * - Wymagane minimum do widocznego efektu
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
