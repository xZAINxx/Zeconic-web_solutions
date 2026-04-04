import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="bg-background py-20">
      <SectionWrapper as="div" className="!py-0">
        <div className="mb-12">
          <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
            All projects
          </span>
          <h2 className="font-display text-3xl font-bold text-textPrimary mt-2">
            More work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
