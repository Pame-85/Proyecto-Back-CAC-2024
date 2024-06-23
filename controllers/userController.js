import db from '../config/db.js'

const formLogin=(req,res)=>{
    res.render('auth/login',{
        pagina:'Iniciar Sesión'   
    })
}
const formRegister=(req,res)=>{
    res.render('auth/register',{
      pagina:'Crear Cuenta'  
    })
}

// Creación de usuarios-POST
const register =(req,res)=>{
 const {name,surname,telephone,email,password}=req.body 
 const sql ='INSERT INTO users(name,surname,telephone,email,password) VALUES(?,?,?,?,?)';
 db.query  (sql,[name,surname,telephone,email,password],(err,result)=>{
    if(err) throw err;
    res.json({message:'User created',userId:result.insertId});
  });
}
const formForgetPassword=(req,res)=>{
    res.render('auth/forget-password',{
      pagina:'Recupera tu acceso en Arts & Culture'  
    })
}

export{
    formLogin,
    formRegister,
    register,
    formForgetPassword
}