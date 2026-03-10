import { Project } from "../../types/project";
import Link from "next/link";
import styles from "./projectlist.module.css";
interface ProjectListProps {
  projects: Project[];
}
const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  return (
    <div className={styles.projectListContainer}>
      {sorted.map((project) => (
        <Link
          href={`/portfolio/${project.id}`}
          key={project.id}
          className={styles.projectItem}
        >
          <h2 className={styles.projectName}>{project.title}</h2>
          <p className={styles.projectDescription}>
            {project.shortDescription}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default ProjectList;
