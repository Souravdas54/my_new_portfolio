import express from "express";

const CVRouter = express.Router();

import { cvController } from "../controllers/controller.cv";

// const upload = createUploadFolder('My CV');

CVRouter.post('/create', cvController.createCV.bind(cvController));

CVRouter.get('/get', cvController.getCV.bind(cvController))

CVRouter.get('/getby/:id', cvController.getCvById.bind(cvController))

CVRouter.delete('/delete/:id', cvController.deleteCV.bind(cvController))

export { CVRouter };