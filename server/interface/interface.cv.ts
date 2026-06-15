export interface CVInterface {
    _id?: string;
    name: string;
    title: string;           // e.g. "Full Stack MERN Developer"
    email: string;
    phone: string;
    location: string;
    about: string;
    imageUrl:string;
    skills: string[];
    education: educationInterface[];
    projects: projectsInterface[];
    socialLink: SocialLinksInterface[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface educationInterface {
    degree: string;
    collage: string;
    passingyears: string
}

export interface projectsInterface {
    title: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface SocialLinksInterface {
    linkedin?: string;
    github?: string;
    portfolio?: string;
    deploy?: string;

}