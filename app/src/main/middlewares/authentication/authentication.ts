/* eslint-disable */
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { GenericError } from '../../../presentation/errors/generic-error';
import { Account } from '../../../domain/models/Account';
import { HttpResponse } from '../../../presentation/protocols';
import { badRequest, serverError, unauthorized } from '../../../presentation/helpers/http-helper';

export const verifyJWT = (req: any, res: any, next: NextFunction): void | HttpResponse => {
  try {
    const token = (req?.headers['x-access-token'] || req?.headers['authorization'] || null);

    if (!token || token == null) throw new GenericError('No token provided.');

    const decode: any = jwt.verify(token.split(' ')[0], process.env.SECRET || "sistema-fono-usc-centrinho", async (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({
          error: err.message
        });
      }
      const account = await Account.findOne({
        where: {
          id: decoded.id,
        },
      })

      if (!account) throw new GenericError('Invalid account token.');

      req.body.userId = decoded.id;
      return next();
    });

  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ error: err.message || `Server Error` });
  }
}
