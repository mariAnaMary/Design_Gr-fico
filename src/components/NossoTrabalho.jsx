import estilos from "./NossoTrabalho.module.css"
import CardTrabalho from "./CardTrabalho";

function Ntrabalho(){
    return(
        <div className={"row " + estilos.fundo} id="trabalho">
            <div className="col-md-12">
                <h2 className={estilos.h2}>NOSSO TRABALHO</h2>
                <p className={estilos.p}>Uma pequena parte do nosso portifólio</p>
                <hr className={estilos.linha}/>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardTrabalho img="/img/Coca.png" descricao="Design de Logotipo,Rótulo e Embalagem."
                ></CardTrabalho>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardTrabalho img="/img/Natura.png" descricao="Design de Logotipo, Rótulo, Embalagem e Site."
                ></CardTrabalho>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardTrabalho img="/img/Melu.png" descricao="Design de Logotipo, Rótulo, Embalagem."
                ></CardTrabalho>
            </div>

            <div className={"col-md-3 col-sm-6 " + estilos.itens}>
                <CardTrabalho img="/img/Nivea.png" descricao="Design de Logotipo, Rótulo, Embalagem."
                ></CardTrabalho>
            </div>

        </div>
    )
}

export default Ntrabalho;