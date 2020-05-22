import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

export const PriceText = styled(({ children, className }) => {
  return (
    <div className={className}>
      <Text size="1.1rem">{children || "ЗП не указана"}</Text>
      <Text size="0.8rem">{children ? "руб" : ""}</Text>
    </div>
  );
})`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  ${Text}:first-child {
    margin-right: 0.3rem;
  }
`;
