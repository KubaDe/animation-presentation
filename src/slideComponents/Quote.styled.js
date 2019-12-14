import styled from "styled-components";
import { Quote } from "spectacle";

const CustomQuote = styled(Quote).attrs({
  textColor: "primary",
})`
  && {
    font-weight: 300;
    font-size: 40px;
    max-width: 80vw;
    margin: 60px auto;
    font-style: italic;
  }
`;

export default CustomQuote
