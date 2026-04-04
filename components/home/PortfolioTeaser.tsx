import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";

export function PortfolioTeaser() {
  return (
    <section className="border-t border-border/30 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-textPrimary md:text-4xl">
            Built for real businesses
          </h2>
          <p className="mt-4 font-body text-base text-textSecondary">
            Every project is custom — no templates, no shortcuts.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="font-body text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            See the full portfolio →
          </Link>
        </p>
      </div>
    </section>
  );
}
