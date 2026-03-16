import React, { useEffect } from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import { ArrowRight } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";

function Features({ colorMode }) {
  const navigate = useNavigate();
  const features = Object.values(content.texts.features.cards);

  return (
    <SectionArea className={`bg-white`}>
      <SectionWrapper>
        <div className="flex flex-col gap-8 desktop1:justify-around">
          <SectionHeaderNovo
            colorMode={colorMode}
            miniTitle={content.texts.features.miniTag}
            title={content.texts.features.FirstPart}
            subtitle={content.texts.features.subtitle}
          />

          <div className="grid tablet1:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <MotionDivDownToUp>
                <div key={idx} className={`group p-6 rounded-xl bg-neutral-50`}>
                  <div
                    className={`w-10 h-10 rounded-full text-primaryLight mb-4 flex items-center justify-center shadow-md transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h1
                    className={`font-secondFont font-bold text-lg mb-2 text-primaryDark transition-all`}
                  >
                    {feature.title}
                  </h1>
                  <p
                    className={`text-sm font-secondFont font-light text-primaryDark/80 transition-all`}
                  >
                    {feature.subtitle}
                  </p>

                  <a
                    rel="noopener noreferrer"
                    href={feature.rota}
                    className="text-primaryLight text-sm hover:scale-90 transition-all duration-500 cursor-pointer mt-6 flex w-fit gap-2 items-center"
                  >
                    Saiba mais
                    <span>
                      <ArrowRight width={18} />
                    </span>
                  </a>
                </div>
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Features;
