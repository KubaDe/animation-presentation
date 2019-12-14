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
        Filtry CSS
      </Heading>
      Możliwe wartości <code>filter</code>- przykłady:
      <ListWrapper>
        <List>
          <ListItem dot><code>blur(length)</code></ListItem>
          <ListItem dot><code>brightness(number-percentage)</code></ListItem>
          <ListItem dot><code>contrast(number-percentage)</code></ListItem>
          <ListItem dot><code>grayscale(number-percentage)</code></ListItem>
          <ListItem dot><code>hue-rotate(angle)</code></ListItem>
          <ListItem dot><code>invert(number-percentage)</code></ListItem>
          <ListItem dot><code>opacity(number-percentage)</code></ListItem>
          <ListItem dot><code>saturate(number-percentage)</code></ListItem>
          <ListItem dot><code>sepia(number-percentage)</code></ListItem>
        </List>
      </ListWrapper>
    </Slide>
  )
}

export default SlideView
