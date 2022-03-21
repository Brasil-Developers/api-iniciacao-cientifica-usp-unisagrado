import { Sequelize } from 'sequelize-typescript';

export default async () => {
    console.log('[DB] Iniciando conexão com o banco de dados...');

    const sequelize = new Sequelize({
        dialect: 'mysql',
        database: 'analise',
        username: "root",
        password: "root",
        port: 3307,
        models: [__dirname + '/../../domain/models'],
    });

    await sequelize.sync({ force: false });
    return sequelize;
};
