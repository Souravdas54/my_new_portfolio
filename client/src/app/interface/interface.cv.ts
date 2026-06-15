export interface EducationInterface {
  degree: string;
  collage: string;
  passingyears: string;
}

export interface SocialLinksInterface {
  linkedin?: string;
  github?: string;
  portfolio?: string;
  deploy?: string;
}

export interface ProjectsInterface {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface CVInterface {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  imageUrl?: string | null;
  skills: string[];
  education: EducationInterface[];
  projects: ProjectsInterface[];
  socialLink: SocialLinksInterface[];
  createdAt?: Date;
  updatedAt?: Date;
}