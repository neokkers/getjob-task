import styled from "styled-components";

export const SizedImage = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  flex-shrink: 0;
`;
export const CircleImage = styled(SizedImage)`
  border-radius: 50%;
`;
