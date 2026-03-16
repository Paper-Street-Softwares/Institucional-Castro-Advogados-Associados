import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import TeamMember from "../../components/cards/TeamMember";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";
import content from "../../content/content";

function TeamHome({ colorMode }) {
  const listMembers = Object.values(content.texts.team.cards);
  return (
    <SectionArea className={`bg-neutral-50`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.team.miniTag}
          title={content.texts.team.title}
          subtitle={content.texts.team.subtitle}
          colorMode={colorMode}
          className={`max-w-[1215px] w-[90%]`}
        />
        <div className="mx-auto md:px-0 ">
          <div className="grid tablet1:grid-cols-2 justify-center items-start flex-wrap gap-6 tablet2:gap-4 desktop1:gap-2">
            {listMembers.map((item, index) => (
              <MotionDivDownToUp key={index}>
                <TeamMember
                  modal={false}
                  img={item.img}
                  rota={item.rota}
                  name={item.name}
                  role={item.role}
                  linkedIn={item.linkedIn}
                  description={item.description}
                  buttonRota={true}
                />
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default TeamHome;
