import {User} from '../../models/user'

function create(req) {
    return User.create(req)
}

function destroy(id){
    return User.destroy({
        where: {
            id: id
        }
    })
}

export default {
    create,
    destroy
}
