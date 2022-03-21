/* eslint-disable */
import jwt from 'jsonwebtoken';

const verifyJWT = (req: any, res: any, next: any) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  jwt.verify(token, 'teste', (err: any, decoded: any) => {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    next();
  });
}

export {
  verifyJWT
}
