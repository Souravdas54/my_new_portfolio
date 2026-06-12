import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.config';

export const CreateUploadFolder = (folderName:string)=>{
    const storage = new CloudinaryStorage({
        cloudinary,
        params:async ()=>({
            folder:folderName,
            allowed_format:['jpg','jpeg','png','webp',]
        })
    })
}