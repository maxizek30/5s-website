// src/app/projects/[id]/page.tsx
import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";
import { Project } from "../../types/project";

async function getProject(id: string): Promise<Project> {
  const projectsDirectory = path.join(
    process.cwd(),
    "src",
    "app",
    "portfolio",
    "projects"
  );
  const filePath = path.join(projectsDirectory, `${id}.json`);

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as Project;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);

  return <ProjectPageClient project={project} />;
}
