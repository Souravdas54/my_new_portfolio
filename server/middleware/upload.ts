import multer from 'multer';
import cloudinary from '../config/cloudinary.config';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadToCloudinary = (fileBuffer: Buffer, folderName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder: folderName,
                allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
            },
            (error, result) => {
                if (error) reject(error);
                else resolve(result!.secure_url);
            }
        ).end(fileBuffer);
    });
}

export const CreateUploadFolder = (folderName: string) => {
    return {
        uploadMiddleware: upload.single('imageUrl'),
        folderName,
    };
    
}

export default upload;