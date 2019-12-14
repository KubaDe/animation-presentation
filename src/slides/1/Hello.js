import React from 'react'

import {
  Heading,
  Slide,
  Quote
} from 'slideComponents';

// Assets
import backgroundSrc from 'assets/background.png'

const VerticalCodeSplit = ({}) => {
  return (
    <Slide
      transition={['zoom']}
      bgImage={backgroundSrc}
    >
      <Heading>
        Styles
      </Heading>
      <Quote>
        Welcome to classes
      </Quote>
    </Slide>
  )
}

export default VerticalCodeSplit
