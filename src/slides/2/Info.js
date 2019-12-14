import React from 'react'

import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  ListWrapper,
} from 'slideComponents';

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        Transition
      </Heading>
      <ListWrapper>
        <List>
          <ListItem>
            Tranzycje to funkcja css pozwalająca na płynną zmianę wartości atrybutów w czasie
          </ListItem>
        </List>
      </ListWrapper>
      <ListWrapper>
        <List>
          <ListItem>
            Tranzycje wyzwolone zostać mogą przez zmieniający się stan elementu, przy użyciu pseudo
            klas (:focus, :active, etc.), przez dynamiczną zmianę w layoucie strony lub na skutek zmian
            atrybutów spowodowanych  działaniem kodu JavaScript
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  )
}

export default SlideView
