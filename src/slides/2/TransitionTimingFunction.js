import React from "react";

import {
  Heading,
  Slide,
  Text,
  Quote,
  List,
  ListItem,
  ListWrapper
} from "slideComponents";

const SlideView = () => {
  return (
    <Slide transition={["zoom"]}>
      <Heading>Transition</Heading>
      <Text>transition-timing-function - Funkca czasu</Text>
      <Quote>Definiuje w jaki sposób, w zależności od czasu, zmieniać się będą wartości atrybutów.</Quote>
      Możliwe wartości  <code>transition-timing-function</code>:
      <ListWrapper width="80vw">
        <List>
          <ListItem size="sm">
            <code>ease</code> - wolny start i koniec, środek szybki
          </ListItem>
          <ListItem size="sm">
            <code>linear</code> - ta sama szybkość od początku do konńca
          </ListItem>
          <ListItem size="sm">
            <code>ease-in</code> - wolny start
          </ListItem>
          <ListItem size="sm">
            <code>ease-in-out</code> - wolny start i koniec
          </ListItem>
          <ListItem size="sm">
            <code>step-start</code> - skokowy start
          </ListItem>
          <ListItem size="sm">
            <code>step-end</code> - skokowy koniec
          </ListItem>
          <ListItem size="sm">
            <code>steps(int,start|end)</code> - definiowanie schodkowego przejścia.
          </ListItem>
          <ListItem size="sm">
            <code>cubic-bezier(n,n,n,n)</code> - definiowanie własnej funkcji czasu
          </ListItem>
          <br/>
          Domyślnie: ease
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
