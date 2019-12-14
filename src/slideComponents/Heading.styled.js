import styled from "styled-components";
import { Heading } from "spectacle";

const CustomHeading = styled(Heading).attrs({
  size: 3,
  lineHeight: 1,
  textColor: "primary"
})`
  && {
    font-weight: 300;
  }
`;

export default CustomHeading
