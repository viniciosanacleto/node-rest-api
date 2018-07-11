import Sequelize from 'sequelize'

const session = new Sequelize('test', 'dbuser', 'secret', {
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

const testConnection = () => {
    session
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        })
}

export default {
    Sequelize,
    session,
    testConnection
}