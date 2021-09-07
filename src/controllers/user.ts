// cache
import { setCache, getCache } from '../helper/cache-ridis/cache';

const jwt = require('jsonwebtoken');

const { User } = require('../models');

const login = async (req:object, res:any) => {
  try {
    const response = await User.findAll({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
      attributes: ['id'],
    });
    const id = Number(response[0].id);
    const token = jwt.sign({ id }, 'teste', {
      // expiresIn: 300,
    });
    return res.json({ auth: true, token_auth: token });
  } catch (err) {
    return res.json({ auth: false, token_auth: null });
  }
};

const getData = async (req:any, res:any) => {
  const getClient = await getCache(req.query.id);
  if (!getClient) {
    try {
      const response = await User.findAll({
        where: {
          id: req.query.id,
        },
      });
      setCache(response[0]?.id, response);
      return res.status(200).json({ data: response });
    } catch (err) {
      return res.status(500).json({ data: null });
    }
  } else {
    return res.status(200).json({ data: getClient });
  }
};

export {
  login,
  getData,
};
