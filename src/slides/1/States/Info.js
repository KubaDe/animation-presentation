import React from 'react'

import {
  Heading,
  Slide,
  ListItem,
  ListWrapper,
  List
} from 'slideComponents';

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        Pseudoklasy CSS
      </Heading>
      <ListWrapper>
        <List>
          <ListItem>
            Pseudoklasy CSS pozwalają na dynamiczne wybranie elementów dokumentu w zależności od ich stanu
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  )
}

export default SlideView
