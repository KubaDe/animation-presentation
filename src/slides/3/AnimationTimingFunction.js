import React from "react";

import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  ListWrapper,
  Quote
} from "slideComponents";

const SlideView = () => {
  return (
    <Slide transition={["zoom"]}>
      <Heading>Animation</Heading>
      <Text>animation-timing-function - funkcja czasu</Text>
      <Quote>Definiuje funkcje czasu przejścia animacji</Quote>
      Możliwe wartości  <code>animation-timing-function</code>:
      <ListWrapper width="80vw">
        <List>
          <ListItem size="sm">
            <code>ease</code> - wolny start i koniec, środek szybki
          </ListItem>
          <ListItem size="sm">
            <code>linear</code> - ta sama szybkość od początku do końca
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
