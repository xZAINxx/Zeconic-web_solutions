import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="relative border-t border-white/[0.05]">
      <SectionWrapper>
        <div className="mb-12 flex flex-col gap-3">
          <span className="eyebrow text-textTertiary">
            <span className="text-accent">●</span>&nbsp; All projects
          </span>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-textPrimary">
            More <span className="aurora-text">work.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
