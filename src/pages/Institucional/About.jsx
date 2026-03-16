import React, { useEffect } from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import AboutFading from "../../components/sectionElements/AboutFading";
import { ArrowRight } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";

function About({ colorMode }) {
  const navigate = useNavigate();

  return (
    <SectionArea className={`bg-neutral-50`}>
      <SectionWrapper>
        <div className="flex flex-col desktop1:flex-row gap-8 desktop1:justify-around">
          <MotionDivDownToUp>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  src={content.texts.about.imagem.imgMobile}
                  alt={content.texts.about.imagem.alt}
                  className="w-[90%] tablet1:w-[95%] tablet2:w-full desktop1:max-w-[428px] mx-auto rounded-md desktop1:hidden"
                />

                <img
                  src={content.texts.about.imagem.img}
                  alt={content.texts.about.imagem.alt}
                  className="w-[90%] tablet1:w-[95%] tablet2:w-full desktop1:max-w-[428px] mx-auto rounded-md hidden desktop1:flex"
                />
              </div>
            </div>
          </MotionDivDownToUp>
          <div className="px-4 desktop1:max-w-[50%]">
            <div>
              <SectionHeaderNovo
                colorMode={colorMode}
                miniTitle={content.texts.apresentation.minitag}
                title={content.texts.apresentation.title}
                subtitle={content.texts.apresentation.subtitle}
                type="article"
              />
            </div>
            <MotionDivDownToUp>
              <AboutFading />
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <a
                rel="noopener noreferrer"
                href="/about"
                className="text-primaryLight text-sm hover:scale-90 transition-all duration-500 cursor-pointer mt-6 flex w-fit gap-2 items-center"
              >
                {content.texts.apresentation.labelButton}
                <span>
                  <ArrowRight width={18} />
                </span>
              </a>
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default About;
