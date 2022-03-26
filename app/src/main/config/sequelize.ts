import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

export default async () => {
    console.log('[DB] Iniciando conexão com o banco de dados...');

    const sequelize = new Sequelize({
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
        database: process.env.DB_DATABASE || 'analise',
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "root",
        port: process.env.DB_PORT || 3307,
        models: [__dirname + '/../../domain/models'],
    } as SequelizeOptions);

    await sequelize.sync({ force: false });
    return sequelize;
};
