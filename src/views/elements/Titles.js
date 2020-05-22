import styled from "styled-components";
import { withSpaces, withColors } from "../utils";

export const Title = styled.h3`
  margin: 0;
  font-size: ${(props) => props.size || "2rem"};
  ${withSpaces};
  ${withColors};
`;
