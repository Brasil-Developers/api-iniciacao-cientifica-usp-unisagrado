/* eslint-disable */
import jwt from 'jsonwebtoken';
import { GenericError } from '../../../presentation/errors/generic-error';
import { badRequest } from '../../../presentation/helpers/http-helper';

const verifyJWT = (req: any, res: any, next: any) => {
  const token = (req.headers['x-access-token'] || req.headers['authorization']).split(' ')[0];
  
  if (!token) return badRequest(new GenericError('No token provided.'));

  jwt.verify(token, 'teste', (err: any, decoded: any) => {
    if (err) return badRequest(new GenericError('Failed to authenticate token.'));
    req.body.userId = decoded.id;
    next();
  });
}

export {
  verifyJWT
}
