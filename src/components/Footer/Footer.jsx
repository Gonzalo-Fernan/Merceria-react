

export const Footer = () =>{
    return(
        <section className="footerConteiner  w-full text-white h-24 flex gap-10 items-center justify-center mt-32">
            <h4>Otherness Merceria es una marca de <a href="">Otherness Espacio Creativo</a></h4>
            <div className="flex gap-5">
                <img className="instagram w-5 h-5" src="/Merceria-react/instagram.png" alt="" />
                <img className="whatsapp w-4 h-4" src="/Merceria-react/whatsapp.png" alt="" />
            </div>
        </section>
    )

}