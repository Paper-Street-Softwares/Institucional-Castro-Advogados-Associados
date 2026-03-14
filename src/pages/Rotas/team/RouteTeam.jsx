import React from "react";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";
import ConteudoTeam from "./ConteudoTeam";

function RouteTeam({ colorMode }) {
  return (
    <div>
      <Navbar />
      <ConteudoTeam colorMode={colorMode} parceiros={false} />
      <Footer phone={true} sociais={false} adress={true} expedient={true} />
    </div>
  );
}

export default RouteTeam;
