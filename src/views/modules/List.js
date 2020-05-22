import React from "react";
import styled from "styled-components";

export const List = styled(({ className, children }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: child.props.className + " item-list-mapped",
        })
      )}
    </div>
  );
})`
  .item-list-mapped:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const InlineList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  margin: -0.3rem;

  .item-list-mapped {
    margin: 0.3rem;
    &:not(:last-child) {
      margin-bottom: 0.3rem;
    }
  }
`;
