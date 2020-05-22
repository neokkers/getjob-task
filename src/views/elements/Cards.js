import styled from "styled-components";
import { withColors, withSpaces } from "../utils";

export const Card = styled.div`
  padding: ${(props) =>
    props.padding ? props.theme.spaces[props.padding] : "0px"};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  ${withColors};
  ${withSpaces};
`;

export const SizedCard = styled(Card)`
  width: ${(props) => props.width || "450px"};
  height: ${(props) => props.height || "auto"};
`;
