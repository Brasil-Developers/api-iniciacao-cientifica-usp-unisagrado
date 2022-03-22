import { RequestHandler } from "express"

export interface Upload {
    storage(): RequestHandler
}