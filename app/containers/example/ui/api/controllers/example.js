import UserRepository from '../../../data/repositories/user'

export default {
    example(req, res) {
        res.send('Welcome to Node Rest API')
    },

    exampleParams(req, res) {
        res.send(`Hello ${req.params.name}`)
    },

    createUser(req, res) {
        let newUser = UserRepository.create(req.body)
        newUser.then(function (result) {
            res.send(result)
        })
    },

    deleteUser(req, res) {
        let deletedUser = UserRepository.destroy(req.params.id)
        deletedUser.then(function () {
            res.send(true)
        })
    }
}