import React from "react";
import styled from "styled-components";
import { Container } from "../elements/Container";
import { withColors } from "../utils";
import ThemeToggler from "../../components/ThemeToggler";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container flex={{ justify: "flex-end", align: "center" }}>
        <ThemeToggler />
      </Container>
    </header>
  );
};

export default styled(Header)`
  ${Container} {
    height: 70px;
  }
  ${withColors};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;
