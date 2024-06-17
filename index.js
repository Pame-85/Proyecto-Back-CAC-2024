const express = require ("express")
const app=express()



app.get('/',(req,res)=>{
    res.json({msg:'Proyecto-BACK-CAC-2024'})

})


// Definir un puerto y arrancar el proyecto
const port=3000

app.listen(port,()=>{
    console.log(`El servidor está funcionando en el puerto${port}`)
})
