import React from "react";
import styled from "styled-components";
import { Title } from "../elements";

export const EntitledBlock = styled(({ children, className, title }) => {
  return (
    <div className={className}>
      <Title size="0.8rem">{title}</Title>
      {children}
    </div>
  );
})`
  ${Title} {
    padding: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;
