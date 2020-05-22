import React from "react";
import styled from "styled-components";
import { CircleImage, Title, Text } from "../elements";
import { PriceText } from "./PriceText";
import { withSpaces } from "../utils";

export const ProfileCardHeading = styled(
  ({ className, image, name, position, info, price }) => {
    return (
      <div className={`${className} ProfileCardHeading`}>
        <CircleImage src={image} width="130px" />
        <div className="description">
          <Title size="1.3rem">{name}</Title>
          <Title size="0.9rem">{position}</Title>
          <Text size="0.7rem">{info}</Text>
          <PriceText>{price}</PriceText>
        </div>
      </div>
    );
  }
)`
  ${withSpaces};
  display: flex;
  ${CircleImage} {
    margin-right: 1.5rem;
  }
  ${PriceText} {
    margin-top: 1rem;
  }
  h3 {
    margin-bottom: 0.4rem;
  }
`;
