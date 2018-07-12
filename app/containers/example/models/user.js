import {session,sequelize} from '../../../ship/core/orm'

export const User = session.define('user', {
    firstName: {
        type: sequelize.STRING
    },
    lastName: {
        type: sequelize.STRING
    }
})