export interface Project {
  id: string;
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
