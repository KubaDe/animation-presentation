import styled from "styled-components";
import { Text } from "spectacle";

const CustomText = styled(Text).attrs({
  textColor: "secondary",
})`
  && {
    font-weight: 300;
    max-width: 85vw;
    line-height: 1.2em;
    margin: 1.5rem auto;
    mix-blend-mode: difference;
  }
`;

export default CustomText
