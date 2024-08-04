import ProjectList from "../components/projectList/ProjectList";
import { Project } from "../types/project";
import styles from "./portfolio.module.css";
// This would typically come from an API or database
const projectsData: Project[] = [
  { id: 1, title: "Project 1", subtitle: "A brief description of Project 1" },
  { id: 2, title: "Project 2", subtitle: "A brief description of Project 2" },
  { id: 3, title: "Project 3", subtitle: "A brief description of Project 3" },
];

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <ProjectList projects={projectsData} />
    </div>
  );
}
