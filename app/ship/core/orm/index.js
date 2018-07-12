import Sequelize from 'sequelize'
import {DATABASE} from '../../configs/database'

export const session = new Sequelize(DATABASE.database, DATABASE.user, DATABASE.password, {
    host: DATABASE.host,
    dialect: DATABASE.dialect,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

export const sequelize = Sequelize