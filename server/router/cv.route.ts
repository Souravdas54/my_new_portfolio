import express from "express";

const CVRouter = express.Router();

import { NextFunction, Request, Response } from "express";

import { cvController } from "../controllers/controller.cv";
import { CreateUploadFolder, uploadToCloudinary } from "../middleware/upload";

const { uploadMiddleware, folderName } = CreateUploadFolder('My CV');


CVRouter.post('/create', uploadMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.file) {
            const imageUrl = await uploadToCloudinary(req.file.buffer, folderName);
            req.body.imageUrl = imageUrl;
        }
        return cvController.createCV.bind(cvController)(req, res, next);

    } catch (error) {
        res.status(500).json({ message: 'Upload failed', error });
    }
});

// CVRouter.post('/create', cvController.createCV.bind(cvController));

CVRouter.get('/get', cvController.getCV.bind(cvController))

CVRouter.get('/getby/:id', cvController.getCvById.bind(cvController))

CVRouter.delete('/delete/:id', cvController.deleteCV.bind(cvController))

export { CVRouter };