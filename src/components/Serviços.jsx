import estilos from "./Serviços.module.css"
import CardServiços from "./CardServiços";

function Servicos(){
    return(
        <div className={"row "+ estilos.fundo} id="serviços">
            <div className="col-md-12">
                <h2 className={estilos.h2}>SERVIÇOS</h2>
                <p className={estilos.p}>Explore aqui os tipos de design que oferecemos</p>
                <hr className={estilos.linha}/>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardServiços img="/img/primeira.png" descricao="Logotipo e Identidade de Marca." botao="Ver"
                ></CardServiços>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardServiços img="/img/segunda.png" descricao="Design de Aplicativos e Web." botao="Ver"
                ></CardServiços>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardServiços img="/img/terceira.png" descricao="Embalagens e Capas." botao="Ver"
                ></CardServiços>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardServiços img="/img/quarta.png" descricao="Design de Impressão." botao="Ver"
                ></CardServiços>
            </div>

        </div>
    )
}

export default Servicos;