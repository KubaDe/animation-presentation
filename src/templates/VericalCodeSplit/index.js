import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
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
      Inline Styleg
    </Heading>
    <Text textColor="white" style={{fontWeight: 300}}>
      akosdhiuasdisjdjkm asdjn asjnd jnas jnasd nm
    </Text>
   <CssCode />
  </Slide>
)
}

export default VerticalCodeSplit
