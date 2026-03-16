import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import ButtonReflexo from "../../components/interactives/ButtonReflexo";
import content from "../../content/content";
import { ArrowRight, Phone } from "lucide-react";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";
import { Check } from "lucide-react";

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
        <section className="relative text-center">
          <MotionDivDownToUp className="container mx-auto">
            <span
              className={`font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block ${miniTagCtaDark}`}
            >
              {content.texts.contato.minitag}
            </span>
            <h2
              className={`text-4xl md:text-[48px] leading-[48px] font-mainFont font-light mb-6 ${text}`}
            >
              {content.texts.contato.title}
            </h2>
            <p
              className={`text-lg font-secondFont font-light md:text-xl max-w-2xl mx-auto mb-4 ${textOpacity}`}
            >
              {content.texts.contato.subtitle}
            </p>

            <div className="flex flex-col w-fit justify-center items-center mx-auto">
              <a
                href={"/contato"}
                target="_blank"
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
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default ContatoHome;
