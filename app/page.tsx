import Image from "next/image";
import MonCanvas from "./Components/troisd/MonCanvas";
import Navbar from "./Components/autres/Navbar";
import Hero from "./Components/autres/Hero";
import MesCartes from "./Components/autres/MesCartes";
import Portofolio from "./Components/autres/Portofolio";
import Footer from "./Components/autres/Footer";

export default function Home() {
  return (
    <main className=" scroll-smooth   snap-mandatory  snap-y">
      <Navbar/>
      <Hero/>
      <MesCartes/>
      <Portofolio/>
      <Footer/>
    </main>
  );
}
