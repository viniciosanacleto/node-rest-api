//Import the corresponding model
import {User} from '../../models/user'

export default {
    /**
     * Create a new register with data passed by request and return a promise to be resolved
     * @param req
     * @returns {*|PromiseLike<req>|Promise<req>}
     */
    create(req) {
        //First verify if the table exist on database. Otherwise, create it.
        return User.sync().then(() => {
            //Insert the new register
            return User.create(req)
        })
    },

    /**
     * Destroy the register what matches the "id"
     * @param id
     * @returns {*}
     */
     destroy(id) {
        return User.destroy({
            where: {
                id: id
            }
        })
    }
}