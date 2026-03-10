export interface Project {
  id: string;
  order: number;
  title: string;
  isGroupProject: boolean;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  thumbnail: string;
  thumbnailAlt: string;
}
