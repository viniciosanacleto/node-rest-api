import exampleController from '../controllers/example'

export default [
    {
        method: 'get',
        path: '/example',
        handle: exampleController.example
    },
    {
        method: 'get',
        path: '/example/:name',
        handle: exampleController.exampleParams
    },
    {
        method: 'post',
        path: '/example',
        handle: exampleController.createUser
    },
    {
        method: 'delete',
        path: '/example/:id',
        handle: exampleController.deleteUser
    }
]
