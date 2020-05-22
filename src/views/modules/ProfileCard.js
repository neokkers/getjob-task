import React from "react";
import styled from "styled-components";
import { SizedCard } from "../elements";
import {
  ProfileCardHeading,
  EntitledBlock,
  List,
  Workplace,
  InlineList,
  SkillTag,
} from "./";

export const ProfileCard = styled(({ className, userData, ...props }) => {
  const { image, name, position, info, price, experience, skills } = userData;
  return (
    <SizedCard className={className} {...props} padding="m">
      <ProfileCardHeading
        image={image}
        name={name}
        position={position}
        info={info}
        price={price}
      />
      <EntitledBlock title="Опыт работы">
        <List>
          {experience.map(({ logo, time, position }) => (
            <Workplace logo={logo} time={time} position={position} key={logo} />
          ))}
        </List>
      </EntitledBlock>
      <EntitledBlock title="Навыки">
        <InlineList>
          {skills.map((el) => (
            <SkillTag
              key={el}
              onRemove={() => console.log(`SkillTag removed: ${el}`)}
            >
              {el}
            </SkillTag>
          ))}
        </InlineList>
      </EntitledBlock>
    </SizedCard>
  );
})`
  .ProfileCardHeading {
    margin-bottom: 2rem;
  }
  ${EntitledBlock}:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
