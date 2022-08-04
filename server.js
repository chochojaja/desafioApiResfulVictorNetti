const express = require('express')
const Contenedor = require('./contenedor')
const app = express()
const {Router} = express
const routerProductos = Router()

routerProductos.get('/api/productos', async ( req, res )=> {
    try {
        const contenedor = new Contenedor('./productos.txt')        
        const productos = await contenedor.getAll()
        // console.log(productos)
        res.send({status: 200, productos})
        
    } catch (error) {
        res.send({status: 500, error})
    }
})

routerProductos.get('/api/productos:id', async ( req, res )=> {
    try {
        const contenedor = new Contenedor('./productos.txt')        
        const productos = await contenedor.getById(req)
        // console.log(productos)
        res.send({status: 200, productos})
        
    } catch (error) {
        res.send({status: 500, error})
    }
})


routerProductos.put('/', (req , res)=>{
    const objProductos = req.body
    res.json({msg: `producto guardado`, objProductos })

 })

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true }))

routerProductos.put('/:id', (req , res)=>{
    const { id } = req.params 
   const objProductos = req.body
   const contenedor = new Contenedor('./Producto.txt')
   contenedor.updateById(id, parseInt(id),... objProductos )
   const respuesta = updateById({ id: title , price , thumbnail })
   res.send({respuesta})
   

 })

app.use('/api/productos', routerProductos)


app.listen(3000, error =>{
    if (error) throw error
    console.log(`servidor escuchando en el puerto 3000`)
})