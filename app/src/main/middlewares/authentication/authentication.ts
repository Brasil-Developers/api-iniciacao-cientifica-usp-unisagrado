/* eslint-disable */
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { GenericError } from '../../../presentation/errors/generic-error';
import { HttpResponse } from '../../../presentation/protocols';

export const verifyJWT = (req: any, res: any, next: NextFunction): HttpResponse | void => {
  try {
    const token = (req.headers['x-access-token'] || req.headers['authorization']);

    if (!token) throw new GenericError('No token provided.');

    return jwt.verify(token.split(' ')[0], 'teste', (err: any, decoded: any) => {
      if (err) throw new GenericError('Invalid token.');
      req.body.userId = decoded.id;

      return next();
    });
    
  } catch (err: any) {
    return res.status(500).json({ error: err.message || `Server Error` });
  }
}
