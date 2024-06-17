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
const formForgetPassword=(req,res)=>{
    res.render('auth/forget-password',{
      pagina:'Recupera tu acceso en Arts & Culture'  
    })
}

export{
    formLogin,
    formRegister,
    formForgetPassword
}