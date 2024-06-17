import express from 'express'
import userRoutes from './routes/userRoutes.js'

// Crear la app- llamamos la función 
const app=express()

// Habilitar Pug
app.set('view engine','pug') 
app.set('views','./views') 

// Carpeta pública 
app.use(express.static('public'))

// Routing
app.use('/auth',userRoutes)

// app.get('/',(req,res)=>{
//     res.json({msg:'Proyecto-BACK-CAC-2024'})

// })


// Definir un puerto y arrancar el proyecto
const port=3000

app.listen(port,()=>{
    console.log(`El servidor está funcionando en el puerto${port}`)
})
