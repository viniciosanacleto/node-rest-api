import ExampleController from '../controllers/example'

export default {
    version: 'v1',
    privacy: 'public',
    endpoints: [
        {
            method: 'get',
            path: '/example',
            handle: ExampleController.example
        },
        {
            method: 'get',
            path: '/example/:name',
            handle: ExampleController.exampleParams
        },
        {
            method: 'post',
            path: '/example',
            handle: ExampleController.createUser
        },
        {
            method: 'delete',
            path: '/example/:id',
            handle: ExampleController.deleteUser
        }
    ]
}


