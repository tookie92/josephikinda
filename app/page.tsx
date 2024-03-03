import Image from "next/image";
import MonCanvas from "./Components/troisd/MonCanvas";
import Navbar from "./Components/autres/Navbar";
import Hero from "./Components/autres/Hero";
import MesCartes from "./Components/autres/MesCartes";
import Portofolio from "./Components/autres/Portofolio";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MesCartes/>
      <Portofolio/>
    </>
  );
}
