import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ScrollMouse } from "../../components/animation/MouseScroll";
import content from "../../content/content";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import ButtonReflexo from "../../components/interactives/ButtonReflexo";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";

function Hero({ colorMode }) {
  return (
    <SectionArea className={``} paddingTopAndBottom={false}>
      <section
        id="/"
        className="relative min-h-[550px] max-h-[750px] flex flex-col items-center justify-center overflow-hidden w-full"
      >
        <div className="absolute inset-0 z-0">
          {" "}
          <img
            src={content.texts.hero.heroBg}
            alt="Cityscape"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /> */}
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center pt-[112px] pb-[32px] phone3:pt-[120px] phone3:pb-[62px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeaderNovo
              className={`text-white max-w-[600px] mx-auto mb-8`}
              colorMode={colorMode}
              miniTitle={content.texts.hero.miniTag}
              title={
                <h1 className="w-fit mx-auto text-[29px] desktop2:text-[50px] font-mainFont leading-10 desktop1:leading-[60px] text-white font-medium drop-shadow-lg">
                  {content.texts.hero.FirstPart}
                  <br />
                  {content.texts.hero.Destaque}
                  <br />
                  {content.texts.hero.SecondPart}
                </h1>
              }
            />
          </motion.div>
        </div>
        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-6">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>
    </SectionArea>
  );
}

export default Hero;
