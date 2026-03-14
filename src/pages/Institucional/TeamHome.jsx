import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import TeamMember from "../../components/cards/TeamMember";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";
import content from "../../content/content";

function TeamHome({ colorMode }) {
  return (
    <SectionArea className={`bg-terciary`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.team.miniTag}
          title={content.texts.team.title}
          colorMode={colorMode}
          className={`max-w-[1215px] w-[90%]`}
        />
        <div className="mx-auto md:px-0 ">
          <div className="grid tablet1:grid-cols-2 justify-center items-start flex-wrap gap-6 tablet2:gap-4 desktop1:gap-2">
            <MotionDivDownToUp>
              <TeamMember
                img={content.texts.team.cards.card1.img}
                name={content.texts.team.cards.card1.name}
                role={content.texts.team.cards.card1.role}
                linkedIn={content.texts.team.cards.card1.linkedIn}
              />
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <TeamMember
                img={content.texts.team.cards.card2.img}
                name={content.texts.team.cards.card2.name}
                role={content.texts.team.cards.card2.role}
                linkedIn={content.texts.team.cards.card2.linkedIn}
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default TeamHome;
