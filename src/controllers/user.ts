const jwt = require('jsonwebtoken');

const { User } = require('../models');

const login = async (req:object, res:any) => {
  try {
    const jane = await User.create({ name: 'fabricio', email: 'fabricio@email.com.br', password: '123456' });
    // you can now access the newly created user
    console.log('success', jane.toJSON());
  } catch (err) {
    // print the error details
    console.log(err);
  }
  const id = 1;
  const token = jwt.sign({ id }, 'teste', {
    expiresIn: 300,
  });
  return res.json({ auth: true, token_: token });
};

const getData = async (req:any, res:any) => {
  // const getClient = await client.get(req.query.id);
  // if (!getClient) {
  try {
    const response = await User.findAll({
      where: {
        id: req.query.id,
      },
    });
    await client.set(response[0].id, response);
    res.send(JSON.stringify({ response_: response }));
  } catch (err) {
    // print the error details
    console.log(err);
  }
  // } else {
  //   res.send(JSON.stringify({ response_: getClient }));
  // }
};

export {
  login,
  getData,
};
