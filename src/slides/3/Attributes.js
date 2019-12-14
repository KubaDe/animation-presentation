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
      <Heading>Animations</Heading>
      <Text>Atrybuty służące do definiowania animacji</Text>
      <ListWrapper width="90vw">
        <List>
          <ListItem>
            <code>animation-name</code>* - które keyframes zastosować
          </ListItem>
          <ListItem>
            <code>animation-duration</code>* - jak długo ma trwać
          </ListItem>
          <ListItem>
            <code>animation-delay</code> - ile poczekać przed startem
          </ListItem>
          <ListItem>
            <code>animation-iteration-count</code> - ile razy odtworzyć
          </ListItem>
          <ListItem>
            <code>animation-direction</code> - w którą stronę odtwarzać
          </ListItem>
          <ListItem>
            <code>animation-timing-function</code> - jak przebiega zmiana
          </ListItem>
          <ListItem>
            <code>animation-fill-mode</code> - wygląd przed lub po
          </ListItem>
          <ListItem>
            <code>animation-play-state</code> - czy odtwarzać
          </ListItem>
          <br />
          * - Wymagane minimum do widocznego efektu
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
