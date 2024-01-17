import { useState } from "react"



export const Loading = () =>{
    const [loading, setLoading] = useState(true)
    
    return(
        <section className="loadingConteiner flex flex-col gap-4 text-white text-center rounded-2xl p-10 w-auto font-semibold">
            <h2 className="text-4xl">Cargando los datos...</h2>
        </section>
    )
}