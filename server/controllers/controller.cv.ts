import { NextFunction, Request, Response } from "express";
import CVModel from "../models/cv.model";
import { Types } from "mongoose";
import { CVInterface } from "../interface/interface.cv";

class Cvcontroller {

    async createCV(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body);

            const CvData = req.body;
            // const existing = await CVModel.findOne({ email: CvData.email })
            // if (!existing) {
            //     res.status(400).json({ message: "CV already exist with this email." })
            //     return;
            // }

            const cv = new CVModel(CvData)

            const dataCv = await cv.save();

            res.status(201).json({
                message: "CV created successfully",
                data: dataCv,
            })

        } catch (error) {
            res.status(500).json({
                message: "Failed to create CV",
                error: error,
            });
        }
    }

    async getCV(req: Request, res: Response) {
        try {
            const getData = await CVModel.find()

            res.status(200).json({
                message: "Data find successfully",
                data: getData
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to get CV",
                error: error,
            });
        }
    }

    async getCvById(req: Request, res: Response) {
        try {
            const id = req.params.id as string;

            if (!id || !Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid CV ID format"

                })
            }

            const showCv = await CVModel.aggregate<CVInterface>([
                { $match: { _id: new Types.ObjectId(id) } },
                { $unwind: { path: "$education", preserveNullAndEmptyArrays: true } },
                {
                    $group: {
                        _id: "$_id",
                        name: { $first: "$name" },
                        title: { $first: "$title" },
                        email: { $first: "$email" },
                        phone: { $first: "$phone" },
                        location: { $first: "$location" },
                        socialLink: { $first: "$socialLink" },
                        about: { $first: "$about" },
                        skills: { $first: "$skills" },
                        education: { $first: "$education" },
                        projects: { $first: "$projects" },

                    }
                },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        title: 1,
                        email: 1,
                        phone: 1,
                        location: 1,
                        about: 1,
                        skills: 1,
                        education: {
                            degree: 1,
                            collage: 1,
                            passingyears: 1
                        },
                        projects: {
                            title: 1,
                            describetion: 1,
                            techStack: 1,
                            liveUrl: 1,
                            githubUrl: 1
                        },
                        socialLink: {
                            linkedin: 1,
                            github: 1
                        },
                        createdAt: 1,
                        updatedAt: 1
                    }
                }
            ]);

            if (!showCv || showCv.length === 0) {
                return res.status(200).json({
                    success: true, data: showCv[0]
                })
            }

            res.status(200).json({
                message: "Data Get Successfully",
                data: showCv
            })
        } catch (error) {

        }
    }

    async updateCV(req: Request, res: Response) {
        try {
            const { id } = req.params;
        } catch (error) {

        }
    }

    async deleteCV(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleteData = await CVModel.findByIdAndDelete(id);
            if (!deleteData) {
                return res.status(400).json({
                    message: "Cv not found"
                })
            }

            res.status(200).json({
                message: "CV deleted succesfully"
            })

        } catch (error) {
            res.status(500).json({
                message: "Failed to delete CV",
                error: error,
            });
        }
    }
}

export const cvController = new Cvcontroller();