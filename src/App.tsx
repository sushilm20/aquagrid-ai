import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pitch from "@/sections/Pitch";
import Problem from "@/sections/Problem";
import Cooling from "@/sections/Cooling";
import Pain from "@/sections/Pain";
import Landscape from "@/sections/Landscape";
import Product from "@/sections/Product";
import Demo from "@/sections/Demo";
import Roi from "@/sections/Roi";
import Tech from "@/sections/Tech";
import Judges from "@/sections/Judges";
import Risks from "@/sections/Risks";
import Roadmap from "@/sections/Roadmap";
import Quotables from "@/sections/Quotables";
import Faq from "@/sections/Faq";
import Sources from "@/sections/Sources";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#03121e] text-[#eaf6fb] antialiased">
      <Hero />
      <Nav />
      <main>
        <Pitch />
        <Problem />
        <Cooling />
        <Pain />
        <Landscape />
        <Product />
        <Demo />
        <Roi />
        <Tech />
        <Judges />
        <Risks />
        <Roadmap />
        <Quotables />
        <Faq />
        <Sources />
      </main>
      <footer className="border-t border-[#22d3ee]/15 bg-[#020d16] px-5 py-10 text-center text-[13px] text-[#7fa8bb]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2">
          <div className="flex items-center gap-2 font-black text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-[#0aa5c2] text-[12px] text-[#03252e]">≋</span>
            AquaGrid AI
          </div>
          <div>Research dossier for the Verizon Smart Campus Innovation Challenge 2026–27 · Cost &amp; Sustainability Transformation</div>
          <div className="text-[#5b7a8c]">Built for Pardha's team — share it, don't forward the raw chat.</div>
        </div>
      </footer>
    </div>
  );
}
