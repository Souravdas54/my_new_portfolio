import mongoose, { Model, Schema } from "mongoose";
import { educationInterface, CVInterface, projectsInterface, SocialLinksInterface } from "../interface/interface.cv";

const educationSchema = new Schema<educationInterface>({
    degree: { type: String, required: true },
    collage: { type: String, required: true },
    passingyears: { type: String, required: true }
})

const SocialLinksSchema = new Schema<SocialLinksInterface>({
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    deploy: { type: String }
})

const projectsSchema = new Schema<projectsInterface>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true },
    liveUrl: { type: String },
    githubUrl: { type: String },
})

const CVSchema = new Schema<CVInterface>({
    name: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    about: { type: String, required: true },
    // imageUrl: { type: String, default: null },
    skills: { type: [String], required: true },
    education: { type: [educationSchema], default: [] },
    projects: { type: [projectsSchema], default: [] },
    socialLink: { type: [SocialLinksSchema], default: [] },
},
    {
        timestamps: true,
    })

CVSchema.index({ name: 1 })

const CVModel: Model<CVInterface> = mongoose.model<CVInterface>("CV", CVSchema);

export default CVModel;