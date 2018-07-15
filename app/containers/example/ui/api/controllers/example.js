import UserRepository from '../../../data/repositories/user'

export default {
    example(req, res) {
        res.send('Welcome to Node Rest API')
    },

    exampleParams(req, res) {
        res.send(`Hello ${req.params.name}`)
    },

    createUser(req, res) {
        //"newUser" receive the promise from repository
        let newUser = UserRepository.create(req.body)
        //Then solve the promise and send a response
        newUser.then(function (result) {
            res.send(result)
        })
    },

    deleteUser(req, res) {
        //"deletedUser" receive the promise from repository
        let deletedUser = UserRepository.destroy(req.params.id)
        //Then solve the promise and send a response
        deletedUser.then(function () {
            res.send(true)
        })
    }
}