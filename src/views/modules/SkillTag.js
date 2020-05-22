import React from "react";
import { Badge } from "../elements";
import styled from "styled-components";

export const SkillTag = styled(({ className, children, onRemove }) => {
  return (
    <Badge className={className}>
      <span>{children}</span>
      <span onClick={onRemove}>X</span>
    </Badge>
  );
})`
  display: flex;
  span {
    &:first-child {
      margin-right: 0.5rem;
    }
    &:last-child {
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
    color: inherit;
  }
`;
