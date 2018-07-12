import orm from './sequelize-boot'

export default {
    session: orm.session,
    Sequelize: orm.Sequelize
}