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
    }
]
