/* eslint-disable */
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { GenericError } from '../../../presentation/errors/generic-error';
import { Account } from '../../../domain/models/Account';
import { HttpResponse } from '../../../presentation/protocols';

export const verifyJWT = (req: any, res: any, next: NextFunction): HttpResponse | void => {
  try {
    const token = (req?.headers['x-access-token'] || req?.headers['authorization'] || null);

    if (!token || token == null) return res.status(403).json({ error: 'No token provided.' });
    
    const decoded: any = jwt.verify(token.split(' ')[0], 'teste', async (err: any, decoded: any) => {
      if (err) throw new GenericError('Invalid token.');

      const account = await Account.findOne({
        where: {
          id: decoded.id,
        },
      })

      if (!account) throw new GenericError('Invalid account token.');
      if (new Date() > new Date(decoded.iat * 1000)) throw new GenericError('Token expired.');

      req.body.userId = decoded.id;
      return next();
    });

    
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ error: err.message || `Server Error` });
  }
}
