import estilos from "./Banner.module.css"

function Banner(){
    return(
        <div className={"row " + estilos.banner} style={{backgroundImage: "url(/img/Banner1.png)"}} id="banner">
            <div className="col">
                <h2 className={estilos.h2}>Pixel Mágico: sua <br /> agência de design <br />gráfico</h2>
                <p className={estilos.p}>Design é a oportunidade para continuar contando uma história,<br/> não apenas resumi-la</p>
            </div>
        </div>
    )
}

export default Banner;