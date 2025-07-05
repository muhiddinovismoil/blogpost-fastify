import { HttpStatusCodes } from '../utils/index.js';
import { uploadFile } from '../service/file.service.js';

export async function fileUpload(req, res) {
    try {
        const data = await uploadFile(req.file);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: data.message,
            data: {
                url: data.url,
                fileName: data.fileName,
            },
        });
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}
