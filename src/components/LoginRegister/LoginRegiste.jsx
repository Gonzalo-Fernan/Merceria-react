



export const LoginRegister = () => {
  


    return(
        <section className="loginConteiner flex gap-16 p-5 items-start justify-center">
            <article className="log">
                <h2 className="tituloIniciar text-white text-3xl mb-2 ">Iniciar Sesion</h2>
                <hr className="hr mb-6" />
                <form className="loginFrom flex flex-col gap-4 items-center justify-center" action="">
                    <input name="usuario" className="name rounded-md w-96 h-9 pl-3 bg-opacity-70 bg-sky-950 text-white" type="text" placeholder="Usuario" />
                    <input name="contraseña" className="password rounded-md w-96 h-9 pl-3 bg-opacity-70 bg-sky-950 text-white" type="password"  placeholder="Contraseña"/>
                    <button className="iniciarSesion text-white rounded-md bg-lime-600 h-12 w-96 text-2xl">Iniciar Sesion</button>
                    
                </form>
            </article>
            <article className="registerConteiner flex flex-col items-center justify-center">
                <h3 className="titleRegister text-white text-2xl mb-6">¿No tenes cuenta todavia? Registrate, accede a compras online y muchos mas beneficios.</h3>
                <form className="registerFrom flex flex-col gap-4" action="">
                    <input name="nombre" className="nameRegister rounded-md pl-3 w-96 h-9 bg-opacity-70 bg-sky-950 text-white" type="text" placeholder="Nombre..." />
                    <input name="email" className="email rounded-md pl-3 w-96 h-9 bg-opacity-70 bg-sky-950 text-white" type="email" placeholder="E-mail..." />
                    <input name="telefono" className="phone rounded-md pl-3 w-96 h-9 bg-opacity-70 bg-sky-950 text-white" type="" placeholder="Telefono..." />
                    <button className="registrar text-white rounded-md bg-lime-600 h-12 text-2xl">Registrarme</button>
                    <button className="google text-white rounded-md bg-blue-500 h-12 w-96 text-2xl">Continuar con Google</button> 
                </form>
            </article>            
        </section>
    )
}