import { Project } from "../../types/project";

const projectsData: Project[] = [
  { id: 1, title: "Project 1", subtitle: "A brief description of Project 1" },
  { id: 2, title: "Project 2", subtitle: "A brief description of Project 2" },
  { id: 3, title: "Project 3", subtitle: "A brief description of Project 3" },
];
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      {/* Add more project details here in the future */}
    </div>
  );
}
