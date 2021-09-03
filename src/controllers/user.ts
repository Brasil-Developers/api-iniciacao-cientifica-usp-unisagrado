const jwt = require('jsonwebtoken');

const login = (req:object, res:any) => {
  const id = 1;
  const token = jwt.sign({ id }, 'teste', {
    expiresIn: 300,
  });
  return res.json({ auth: true, token_: token });
};

export default login;
