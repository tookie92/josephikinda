import Navbar from "./Components/autres/Navbar";
import Hero from "./Components/autres/Hero";
import Portofolio from "./Components/autres/Portofolio";
import Trust from "./Components/autres/Trust";
import Footer from "./Components/autres/Footer";

export default function Home() {
  return (
    <main className="m-0 w-full p-0">
      <a
        href="#realisation"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
      >
        Aller au travail
      </a>
      <Navbar />
      <Hero />
      <Portofolio />
      <Trust />
      <Footer />
    </main>
  );
}
