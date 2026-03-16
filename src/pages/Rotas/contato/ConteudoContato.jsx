import React, { useEffect } from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import bgImg from "../../../assets/imgs/contato/bgImg.webp";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Search,
  SearchCheck,
} from "lucide-react";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import content from "../../../content/content";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function Contato({ colorMode, social }) {
  const linksContato = {
    link1: {
      icon: (
        <>
          <Phone width={20} className={`text-primaryLight`} />
        </>
      ),
      text: (
        <>
          <a rel="noopener noreferrer" href={content.texts.links.ctaWhatsapp}>
            {content.texts.infos.phone}
          </a>
        </>
      ),
    },
    link2: {
      icon: (
        <>
          <Mail width={20} className={`text-primaryLight`} />
        </>
      ),
      text: <>{content.texts.infos.email}</>,
    },
    // link3: {
    //   icon: (
    //     <>
    //       <Mail width={20} className={`text-primaryLight`} />
    //     </>
    //   ),
    //   text: <>{content.texts.infos.emailSecundario}</>,
    // },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="">
      <section className="relative min-h-[250px] h-[47vh] max-h-[405px] flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImg}
            alt="Cityscape"
            className="w-full h-full object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-[#0f2a3a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3a] via-transparent to-transparent" /> */}
        </div>
        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-6">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea className={`bg-white`}>
        <SectionWrapper>
          <MotionDivDownToUp className={`w-full`}>
            <div className="font-mainFont flex flex-col tablet2:flex-row gap-4 w-full tablet2:justify-around">
              <div className="flex flex-col gap-4">
                <SectionHeaderNovo
                  miniTitle={content.texts.footer.sectionHeader.miniTag}
                  title={content.texts.footer.sectionHeader.title}
                  subtitle={content.texts.footer.sectionHeader.subtitle}
                  type="article"
                  colorMode={colorMode}
                  className={`max-w-[500px]`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-primaryLight text-xl font-medium">
                  Assessoria de Imprensa
                </h1>
                <div className="flex flex-col gap-4">
                  {Object.values(linksContato)
                    .slice(0, 8)
                    .map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        {item.icon}
                        <span className="text-corOutrosTextosPreto/70 text-md">
                          {item.text}
                        </span>
                      </div>
                    ))}
                </div>
                {social && (
                  <div className="flex gap-4">
                    <a
                      href={content.texts.links.instagram}
                      className="bg-primaryDark/20 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer hover:scale-90 duration-500 transition-all"
                    >
                      {" "}
                      <Instagram width={20} className="text-primaryDark/70" />
                    </a>
                    <a
                      href={content.texts.links.linkedin}
                      className="bg-primaryDark/20 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer hover:scale-90 duration-500 transition-all"
                    >
                      <Linkedin width={20} className="text-primaryDark/70" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>

        <MotionDivDownToUp className={`max-w-[1215px] w-[90%] mt-10`}>
          <div className="mt-8 w-full">
            <iframe
              src={content.texts.maps.embedsrc}
              width="100%"
              height=""
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do local da empresa"
              className="h-[350px] desktop1:h-[420px] rounded-md"
            ></iframe>
          </div>
        </MotionDivDownToUp>
      </SectionArea>
    </div>
  );
}

export default Contato;
