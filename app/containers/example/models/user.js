import {session,sequelize} from '../../../ship/core/orm'

const User = session.define('user', {
    firstName: {
        type: sequelize.STRING
    },
    lastName: {
        type: sequelize.STRING
    }
});

export default User