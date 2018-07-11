import orm from '../../../ship/core/orm'

const User = orm.session.define('user', {
    firstName: {
        type: orm.Sequelize.STRING
    },
    lastName: {
        type: orm.Sequelize.STRING
    }
});

export default User