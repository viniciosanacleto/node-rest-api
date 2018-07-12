import Sequelize from 'sequelize'

export const session = new Sequelize('test', 'dbuser', 'secret', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

export const sequelize = Sequelize