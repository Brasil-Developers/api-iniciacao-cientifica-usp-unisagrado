import { MulterUpload } from '../../../infra/local/upload/multer';
import jwt  from 'jsonwebtoken';

export const upload = (req: any, res: any, next: any) => {
    const uploadService = new MulterUpload({
        /** Define o destino dos uploads */
        destination: (req: any, file: any, cb: any) => {
            cb(null, 'uploads/')
        },
        /** Define a forma como são gravados os arquivos enviados */
        filename: (req: any, file: any, cb: any) => {
            const { userId } = req;
            const token = jwt.sign({ id: userId }, 'teste');
            cb(null, token);
        }
    });
    return uploadService.storage()(req, res, next);
}