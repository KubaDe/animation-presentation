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
      <ListWrapper>
        <List>
          <ListItem>
            Własność pozwalająca na nakładanie graficznych efektów na elementy
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  )
}

export default SlideView
