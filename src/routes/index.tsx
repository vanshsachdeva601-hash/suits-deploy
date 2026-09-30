import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/devops-hero.jpg";
import alexImage from "@/assets/team-alex.jpg";
import donnaImage from "@/assets/team-donna.jpg";
import harveyImage from "@/assets/team-harvey.jpg";
import jessicaImage from "@/assets/team-jessica.jpg";
import louisImage from "@/assets/team-louis.jpg";
import mikeImage from "@/assets/team-mike.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEVOPS CLUB — Bennett University" },
      {
        name: "description",
        content:
          "Bennett University's student-driven DevOps community for engineering, automation, cloud, and execution.",
      },
      { property: "og:title", content: "DEVOPS CLUB — Bennett University" },
      {
        property: "og:description",
        content: "Where engineering discipline meets the confidence to ship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevOpsClub,
});

const missions = [
  { number: "01", title: "CI/CD", text: "Designing reliable paths from commit to deployment.", detail: "Pipelines / Release systems" },
  { number: "02", title: "CLOUD", text: "Understanding infrastructure, scalability and modern cloud workflows.", detail: "Architecture / Scale" },
  { number: "03", title: "AUTOMATION", text: "Reducing repetitive work through intelligent systems.", detail: "Tooling / Efficiency" },
  { number: "04", title: "OBSERVABILITY", text: "Making systems visible, measurable and easier to operate.", detail: "Signals / Reliability" },
];

const team = [
  { name: "Harvey Mehra", role: "President", discipline: "Strategy / Leadership", image: harveyImage },
  { name: "Mike Arora", role: "Technical Lead", discipline: "Cloud / Automation", image: mikeImage },
  { name: "Jessica Shah", role: "Operations Lead", discipline: "Community / Partnerships", image: jessicaImage },
  { name: "Louis Kapoor", role: "Infrastructure Lead", discipline: "Systems / DevOps", image: louisImage },
  { name: "Donna Malhotra", role: "Design & Communications", discipline: "Brand / Experience", image: donnaImage },
  { name: "Alex Khan", role: "Engineering", discipline: "CI/CD / Tooling", image: alexImage },
];

const principles = [
  { number: "01", title: "Precision", text: "We care about reliable systems." },
  { number: "02", title: "Ownership", text: "We take responsibility for what we ship." },
  { number: "03", title: "Curiosity", text: "We keep learning." },
  { number: "04", title: "Execution", text: "Ideas matter when they reach production." },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Missions", href: "#missions" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function DevOpsClub() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-hero-line text-hero-foreground">
        <div className="page-shell flex h-24 items-center justify-between">
          <a href="#top" className="group flex items-center gap-4" aria-label="DEVOPS CLUB home">
            <span className="brand-mark" aria-hidden="true">DC</span>
            <span className="flex flex-col">
              <span className="font-display text-xl font-semibold uppercase leading-none">DevOps Club</span>
              <span className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-hero-muted">Bennett University</span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a key={item.label} href={item.href} className="nav-link">
                <span className="text-accent">0{index + 1}</span>{item.label}
              </a>
            ))}
          </nav>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-none border border-hero-line text-hero-foreground hover:bg-hero-line hover:text-hero-foreground md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-line bg-hero px-6 py-6 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a key={item.label} href={item.href} onClick={closeMenu} className="flex border-b border-hero-line py-4 font-display text-3xl uppercase">
                <span className="mr-4 text-sm text-accent">0{index + 1}</span>{item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="hero-section relative flex min-h-[760px] items-end text-hero-foreground lg:min-h-[820px]">
        <img
          src={heroImage}
          alt="A monochrome high-rise boardroom overlooking a nighttime city skyline"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="hero-grid absolute inset-0" aria-hidden="true" />

        <div className="page-shell relative z-10 grid w-full gap-12 pb-12 pt-40 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            <div className="mb-7 flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-hero-muted">
              <span className="h-px w-14 bg-accent" />
              Engineering brief / 001
            </div>
            <h1 className="hero-title font-display font-semibold uppercase" aria-label="DevOps With Precision.">
              <span><GlowText text="DevOps" hero material="light" /></span>
              <span><GlowText text="With" hero material="light" /></span>
              <span className="text-accent"><GlowText text="Precision." hero material="red" /></span>
            </h1>
          </div>
          <div className="border-l border-hero-line pl-6 lg:col-span-4 lg:mb-3 lg:pl-8">
            <p className="font-display text-2xl font-medium uppercase">Build. Automate. Deploy.</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-hero-muted">Where engineering discipline meets the confidence to ship.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="red-button-glow h-12 rounded-none bg-accent px-6 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-none hover:-translate-y-0.5 hover:bg-accent/90">
                <a href="#about">Meet the club <ArrowUpRight /></a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-none border-hero-line bg-transparent px-6 text-xs font-bold uppercase tracking-[0.14em] text-hero-foreground shadow-none hover:-translate-y-0.5 hover:bg-hero-line hover:text-hero-foreground">
                <a href="#missions">View our work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-block bg-paper text-ink">
        <div className="page-shell" data-reveal>
          <SectionLabel number="02" text="About the club" />
          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h2 className="section-title font-display uppercase" aria-label="The Club."><GlowText text="The" material="dark" /><br /><GlowText text="Club" material="dark" /><span className="text-accent"><GlowText text="." material="red" /></span></h2>
            </div>
            <div className="flex flex-col justify-between border-l border-paper-line pl-6 lg:col-span-5 lg:pl-10">
              <p className="font-display text-2xl font-semibold uppercase leading-tight md:text-3xl">Engineering.<br />Automation.<br />Execution.</p>
              <div className="mt-16">
                <p className="max-w-lg text-base leading-8 text-ink-muted">DevOps Club is a student-driven community focused on understanding how modern software moves from idea to production.</p>
                <dl className="mt-10 grid grid-cols-2 border-y border-paper-line py-5 text-xs uppercase">
                  <div><dt className="text-ink-muted">Established</dt><dd className="mt-2 font-bold">2026</dd></div>
                  <div><dt className="text-ink-muted">Location</dt><dd className="mt-2 font-bold">Bennett University</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="missions" className="section-block bg-background">
        <div className="page-shell" data-reveal>
          <SectionLabel number="03" text="Practice areas" />
          <div className="mt-14 grid gap-8 border-b border-border pb-10 md:grid-cols-2 md:items-end">
            <h2 className="section-title font-display uppercase" aria-label="What We Build."><GlowText text="What We" material="light" /><br /><GlowText text="Build" material="light" /><span className="text-accent"><GlowText text="." material="red" /></span></h2>
            <p className="max-w-md justify-self-end text-sm leading-7 text-muted-foreground">Four disciplines. One operating principle: build systems that remain clear under pressure.</p>
          </div>
          <div className="case-list">
            {missions.map((mission) => (
              <article key={mission.number} className="case-row group">
                <span className="case-number font-display">{mission.number}</span>
                <h3 className="font-display text-4xl font-semibold uppercase transition-transform duration-300 group-hover:translate-x-1 md:text-5xl">{mission.title}</h3>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">{mission.text}</p>
                <span className="hidden text-right text-[0.62rem] font-bold uppercase tracking-[0.16em] text-accent lg:block">{mission.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-block bg-paper text-ink">
        <div className="page-shell" data-reveal>
          <SectionLabel number="04" text="Leadership directory" />
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="section-title font-display uppercase" aria-label="The Team."><GlowText text="The Team" material="dark" /><span className="text-accent"><GlowText text="." material="red" /></span></h2>
            <p className="font-display text-2xl font-semibold uppercase md:justify-self-end md:text-right">The people<br />behind the system.</p>
          </div>
          <div className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} className="team-entry group">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                  <img src={member.image} alt={`Fictional portrait of ${member.name}, ${member.role}`} width={768} height={1024} loading="lazy" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.015] group-hover:contrast-125" />
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  <span className="absolute left-4 top-4 text-[0.6rem] font-bold tracking-[0.18em] text-hero-foreground">DC / 0{index + 1}</span>
                </div>
                <div className="mt-5 flex items-start justify-between border-b border-paper-line pb-5">
                  <div>
                    <h3 className="font-display text-2xl font-semibold uppercase">{member.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase text-accent">{member.role}</p>
                  </div>
                  <span className="pt-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-ink-muted">{member.discipline}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted">Concept roster — fictional profiles created for this design.</p>
        </div>
      </section>

      <section className="section-block bg-background">
        <div className="page-shell" data-reveal>
          <SectionLabel number="05" text="Operating principles" />
          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="section-title font-display uppercase" aria-label="How We Work."><GlowText text="How We" material="light" /><br /><GlowText text="Work" material="light" /><span className="text-accent"><GlowText text="." material="red" /></span></h2>
            </div>
            <div className="lg:col-span-7">
              {principles.map((principle) => (
                <article key={principle.number} className="principle-row group">
                  <span className="font-display text-lg text-accent">{principle.number}</span>
                  <h3 className="font-display text-4xl font-semibold uppercase transition-transform duration-300 group-hover:translate-x-1 md:text-6xl">{principle.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-accent py-24 text-accent-foreground md:py-32">
        <div className="cta-grid absolute inset-0" aria-hidden="true" />
        <div className="page-shell relative" data-reveal>
          <SectionLabel number="06" text="The next deployment" inverted />
          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
            <h2 className="cta-title font-display font-semibold uppercase lg:col-span-8" aria-label="Ready to build something that lasts?"><GlowText text="Ready to build something that lasts?" material="light" /></h2>
            <div className="lg:col-span-4">
              <p className="max-w-sm text-sm leading-7 text-accent-soft">Join the people who care about how software gets shipped.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-none bg-ink px-6 text-xs font-bold uppercase tracking-[0.14em] text-paper shadow-none hover:-translate-y-0.5 hover:bg-ink/90">
                  <a href="mailto:devopsclub@example.edu">Join the club <ArrowUpRight /></a>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-none border-accent-foreground/40 bg-transparent px-6 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-none hover:-translate-y-0.5 hover:bg-accent-foreground/10 hover:text-accent-foreground">
                  <a href="#team">Explore the team</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-hero py-14 text-hero-foreground">
        <div className="page-shell">
          <div className="grid gap-12 border-b border-hero-line pb-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="font-display text-4xl font-semibold uppercase">DevOps Club</p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-hero-muted">Bennett University</p>
            </div>
            <nav className="grid grid-cols-2 gap-3 text-xs font-bold uppercase md:col-span-3" aria-label="Footer navigation">
              {navItems.map((item) => <a key={item.label} href={item.href} className="footer-link">{item.label}</a>)}
            </nav>
            <div className="md:col-span-3">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-hero-muted">Social</p>
              <div className="mt-4 flex flex-col gap-3 text-xs font-bold uppercase">
                <a className="footer-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                <a className="footer-link" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="footer-link" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-hero-muted sm:flex-row sm:justify-between">
            <p>Built for the next deployment.</p>
            <p>© 2026 DevOps Club</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

type GlowMaterial = "light" | "dark" | "red";

function GlowText({ text, hero = false, material }: { text: string; hero?: boolean; material: GlowMaterial }) {
  return (
    <span className={`letter-glow letter-glow-${material}${hero ? " letter-glow-hero" : ""}`} aria-hidden="true">
      {text.split(/(\s+)/).map((part, partIndex) =>
        /\s+/.test(part) ? (
          part
        ) : (
          <span className="letter-glow-word" key={`${part}-${partIndex}`}>
            {Array.from(part).map((character, characterIndex) => (
              <span className="letter-glow-character" key={`${character}-${characterIndex}`}>{character}</span>
            ))}
          </span>
        ),
      )}
    </span>
  );
}

function SectionLabel({ number, text, inverted = false }: { number: string; text: string; inverted?: boolean }) {
  return (
    <div className={`flex items-center gap-4 border-b pb-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] ${inverted ? "border-accent-foreground/35" : "border-current/20"}`}>
      <span className={inverted ? "text-accent-foreground" : "text-accent"}>{number}</span>
      <span>{text}</span>
    </div>
  );
}