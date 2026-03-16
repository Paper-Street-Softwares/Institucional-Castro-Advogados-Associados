import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import ButtonReflexo from "../../components/interactives/ButtonReflexo";
import content from "../../content/content";
import { ArrowRight, Phone } from "lucide-react";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";
import { Check } from "lucide-react";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";

function ContatoHome({ colorMode }) {
  // Classes dinâmicas conforme colorMode
  let text, textOpacity, backgroundMode, miniTagCtaDark, textDestaque;

  switch (colorMode) {
    case "light":
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      backgroundMode = "bg-transparent";
      miniTagCtaDark = "text-primaryDark";
      break;
    case "dark":
      text = "text-corTitulosBranca";
      textOpacity = "text-corTitulosBranca/60";
      textDestaque = "text-primaryLight";
      backgroundMode = "bg-transparent";
      miniTagCtaDark = "text-primaryLight";
      break;
    case "defaultDark":
      text = "text-primaryDark";
      textOpacity = "text-primaryDark/80";
      textDestaque = "text-primaryLight";
      backgroundMode = "bg-transparent";
      miniTagCtaDark = "text-primaryLight";
      break;

    case "defaultLight":
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      backgroundMode = "bg-transparent";
      miniTagCtaDark = "text-primaryDark";
  }

  return (
    <SectionArea className={`relative z-0 ${backgroundMode}`}>
      {/* Fundo decorativo */}
      <SectionWrapper className="">
        <section className="relative text-center flex flex-col desktop1:flex-row gap-4 justify-between items-center">
          <MotionDivDownToUp className="desktop1:text-left desktop1:max-w-[50%]">
            <SectionHeaderNovo
              colorMode={colorMode}
              miniTitle={content.texts.contato.minitag}
              title={content.texts.contato.title}
              subtitle={content.texts.contato.subtitle}
              className={`desktop1:hidden mb-4`}
            />

            <SectionHeaderNovo
              colorMode={colorMode}
              miniTitle={content.texts.contato.minitag}
              title={content.texts.contato.title}
              subtitle={content.texts.contato.subtitle}
              type="article"
              className={`hidden desktop1:flex desktop1:flex-col`}
            />

            <div className="flex flex-col w-fit justify-center items-center mx-auto desktop1:mx-0">
              <a
                href={"/contato"}
                rel="noopener noreferrer"
                className="text-primaryLight text-sm hover:scale-90 transition-all duration-500 cursor-pointer mt-6 flex w-fit gap-2 items-center"
              >
                {content.texts.contato.ctaButtonText}
                <span>
                  <ArrowRight width={18} />
                </span>
              </a>
            </div>
          </MotionDivDownToUp>

          <MotionDivDownToUp
            className={`max-w-[1215px] desktop1:max-w-[500px] w-full`}
          >
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
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default ContatoHome;
