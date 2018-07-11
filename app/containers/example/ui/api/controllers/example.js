import User from '../../../models/user'

export default {
    example(req, res) {
        res.send('Welcome to Node Rest API')
    },

    exampleParams(req, res) {
        res.send(`Hello ${req.params.name}`)
    },

    createUser(req, res) {
        if (User.create({
            firstName: req.body.name,
            lastName: req.body.last
        })) {
            res.send('User sucefully created')
        }else{
            res.send('Failed to create a new User')
        }
    }
}