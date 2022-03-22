/* eslint-disable */
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { GenericError } from '../../../presentation/errors/generic-error';
import { badRequest, serverError } from '../../../presentation/helpers/http-helper';
import { HttpResponse } from '../../../presentation/protocols';

export const verifyJWT = (req: any, res: any, next: NextFunction): HttpResponse | void => {
  try {
    const token = (req.headers['x-access-token'] || req.headers['authorization']);

    if (!token) return badRequest(new GenericError('No token provided.'));

    const decoded: any = jwt.verify(token.split(' ')[0], 'teste', (err: any, decoded: any) => {
      if (err) throw new GenericError('Invalid token.');
      req.body.userId = decoded.id;

      return next();
    });
    
  } catch (err: any) {
    return res.status(500).json({ error: err.message || `Server Error` });
  }
}
