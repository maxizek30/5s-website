import { promises as fs } from "fs";
import path from "path";

import ProjectList from "../components/projectList/ProjectList";
import { Project } from "../types/project";
import styles from "./portfolio.module.css";
// This would typically come from an API or database
async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(
    process.cwd(),
    "src",
    "app",
    "portfolio",
    "projects"
  );
  const filenames = await fs.readdir(projectsDirectory);

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      return JSON.parse(fileContents) as Project;
    })
  );

  return projects;
}
export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className={styles.portfolioContainer}>
      <ProjectList projects={projects} />
    </div>
  );
}
