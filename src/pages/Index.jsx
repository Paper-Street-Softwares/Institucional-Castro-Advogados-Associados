import { lazy, Suspense, useEffect } from "react";
// Lazy — abaixo da dobra
import { ColorModeProvider } from "../context/UseContextArchive";
import { useColorMode } from "../context/UseContextArchive";
import FormNovoTemplate from "../components/sections/FormNovoTemplate";
import Navbar from "./Institucional/Navbar";
import Hero from "./Institucional/Hero";
import About from "./Institucional/About";
import Footer from "./Institucional/Footer";
import Mapa from "../components/sections/Mapa";
import Features from "./Institucional/Features";
import TeamHome from "./Institucional/TeamHome";
import ContatoHome from "./Institucional/ContatoHome";

export default function Index() {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ColorModeProvider>
        <Navbar />
        <main>
          <Hero />
          <About colorMode={colorMode} />
          <Features colorMode={colorMode} />
          <TeamHome colorMode={colorMode} />
          <ContatoHome colorMode={colorMode} />
          {/* <Mapa colorMode={colorMode} /> */}
          {/* <FormNovoTemplate colorMode={colorMode} /> */}
        </main>
        <Footer phone={true} sociais={false} adress={true} expedient={true} />
      </ColorModeProvider>
    </>
  );
}
