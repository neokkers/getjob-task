import styled from "styled-components";
import { withColors } from "../utils";

export const Text = styled.div`
  font-size: ${(props) => props.size || "0.9rem"};
  /* ${withColors}; */
  display: ${(props) => props.display || "block"};
`;
