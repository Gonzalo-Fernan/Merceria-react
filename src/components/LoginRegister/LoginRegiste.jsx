import { useParams } from "react-router-dom"



export const LoginRegister = () => {
  


    return(
        <section className="loginConteiner flex gap-16 p-5 items-start justify-center">
            <article>
                <h2 className="text-white text-3xl mb-2 ">Iniciar Sesion</h2>
                <hr className="mb-6" />
                <form className="flex flex-col gap-4 items-center justify-center" action="">
                    <input name="usuario" className="rounded-md w-96 h-9 pl-3 bg-opacity-70 bg-sky-950 text-white" type="text" placeholder="Usuario" />
                    <input name="contraseña" className="rounded-md w-96 h-9 pl-3 bg-opacity-70 bg-sky-950 text-white" type="password"  placeholder="Contraseña"/>
                    <button className="text-white rounded-md bg-lime-600 h-12 w-96 text-2xl">Iniciar Sesion</button>
                    
                </form>
            </article>
            <article className="flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl mb-6">¿No tenes cuenta todavia? <br/> Registrate, accede a compras online <br/> y muchos mas beneficios.</h3>
                <form className="flex flex-col gap-4" action="">
                    <input name="nombre" className="rounded-md pl-3 w-96 h-9 bg-opacity-70 bg-sky-950 text-white" type="text" placeholder="Nombre..." />
                    <input name="email" className="rounded-md pl-3 w-96 h-9 bg-opacity-70 bg-sky-950 text-white" type="email" placeholder="E-mail..." />
                    <input name="telefono" className="rounded-md pl-3 w-96 h-9 bg-opacity-70 bg-sky-950 text-white" type="" placeholder="Telefono..." />
                    <button className="text-white rounded-md bg-lime-600 h-12 text-2xl">Registrarme</button>
                    <button className="text-white rounded-md bg-blue-500 h-12 w-96 text-2xl">Continuar con Google</button> 
                </form>
            </article>            
        </section>
    )
}