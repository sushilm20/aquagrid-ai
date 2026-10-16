import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

/** Sticky scrollspy nav. */
export default function Nav() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="noscroll mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-bold transition ${
              active === l.href ? "bg-[#cd040b] text-white" : "text-neutral-500 hover:bg-neutral-100 hover:text-[#0a0a0b]"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
