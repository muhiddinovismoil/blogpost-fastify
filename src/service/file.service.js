import fs from 'fs';
import { randomBytes } from 'crypto';
import path from 'path';

export async function uploadFile(file) {
    try {
        const data = await file();
        const randomName = randomBytes(16).toString('hex');
        const fileExt = path.extname(data.filename);
        const fileName = `${randomName}${fileExt}`;
        const uploadPath = `./upload/${fileName}`;
        const buffer = await data.toBuffer();
        await fs.promises.writeFile(uploadPath, buffer);
        return {
            message: 'File uploaded!',
            fileName,
            url: `/uploads/${fileName}`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
}
