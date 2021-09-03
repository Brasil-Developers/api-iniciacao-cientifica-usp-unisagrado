const jwt = require('jsonwebtoken');

const { User } = require('../models');

const login = (req:object, res:any) => {
  User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });
  const id = 1;
  const token = jwt.sign({ id }, 'teste', {
    expiresIn: 300,
  });
  return res.json({ auth: true, token_: token });
};

export default login;
