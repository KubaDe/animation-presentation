import React from 'react'

import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  ListWrapper,
  Quote,
} from 'slideComponents';

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        Transform
      </Heading>
      <Text light>
        Łączenie transformacji
      </Text>
      <Quote>
        Przy łączeniu transformacji pamiętamy o tym, że kolejność ma znaczenie!
      </Quote>
      <Quote>
        Możemy składać tą samą właściwość parokrotnie
      </Quote>
      <ListWrapper width="90vw">
      <List>
        <ListItem><code>transform: scaleY(1.5) translate(x, y);</code></ListItem>
      </List>
      </ListWrapper>
    </Slide>
  )
}

export default SlideView
