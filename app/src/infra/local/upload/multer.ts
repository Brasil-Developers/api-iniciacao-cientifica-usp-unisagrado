import { RequestHandler } from "express";
import multer from "multer";
import { Upload as IUpload } from "../../../data/protocols/upload";

export class MulterUpload implements IUpload {
    private options: Object;

    constructor(options: Object) {
        this.options = options;
    }

    storage(): RequestHandler {
        const storage = multer.diskStorage(this.options as multer.DiskStorageOptions)
        return multer({ storage }).single("file");
    }
}