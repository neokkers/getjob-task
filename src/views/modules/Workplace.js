import React from "react";
import styled from "styled-components";
import { SizedImage, Text } from "../elements";

export const Workplace = styled(({ className, logo, time, position }) => {
  return (
    <div className={className}>
      <SizedImage src={logo} height="40px" />
      <Text size="0.7rem">{time}</Text>
      <Text size="0.7rem">{position}</Text>
    </div>
  );
})`
  background: ${(props) => props.theme.colors.bgSecondary};
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 10px;
  padding: 1rem;
  height: 70px;
  align-items: center;
  justify-content: space-between;

  ${Text} {
    flex-basis: 30%;
  }
`;
