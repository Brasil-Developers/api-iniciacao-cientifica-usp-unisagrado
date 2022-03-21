import { ILogErrorRepository } from "../../../data/protocols/log-error-repository";
import winston from "winston";

export class LogWinstonRepository implements ILogErrorRepository {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: 'verbose',
            format: winston.format.json(),
            defaultMeta: { service: 'api-log-erros' },
            transports: [
                new winston.transports.File({ filename: 'logs/error.log' }),
            ],
        });
    }

    async logError(stack: string): Promise<any> {
        return this.getLogger().error(stack);
    }


    getLogger(): winston.Logger {
        return this.logger;
    }
}