import orm from './sequelize_boot'

export default {
    session: orm.session,
    Sequelize: orm.Sequelize
}