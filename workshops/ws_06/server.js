import express from 'express'

const server = express()

const PORT = 8080
const ready = ()=> console.log('server ready on port '+PORT)

server.use(express.urlencoded({extended:true}))
server.listen(PORT,ready)

const index_route = '/index'
const index_function = (req,res)=>res.send('see /index!')
server.get(index_route,index_function)

const products_route = '/products'
const products_function = (req,res)=>res.send({
    success: true,
    products: []
})
server.get(products_route,products_function)

const params_route = '/:name/:last_name'
const params_function = (req,res)=>{
    let { name,last_name } = req.params
    res.send({
        success: true,
        message: `Hola ${name} ${last_name}!`
    })
}
server.get(params_route,params_function)

const query_route = '/nick'
const query_function = (req,res)=>{
    let name = req.query.name ?? 'Coder'
    res.send({
        success: true,
        message: `Hola ${name}!`
    })
}
server.get(query_route,query_function)