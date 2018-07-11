export default {
    example(req,res){
        res.send('Welcome to Node Rest API')
    },

    exampleParams(req,res){
        res.send(`Hello ${req.params.name}`)
    }
}