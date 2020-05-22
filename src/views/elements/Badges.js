import styled from "styled-components";

export const Badge = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.bgGray};
  font-size: 0.6rem;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.primary};
`;
