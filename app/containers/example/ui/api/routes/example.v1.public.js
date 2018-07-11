import exampleController from '../controllers/example.controller'

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
    }
]
