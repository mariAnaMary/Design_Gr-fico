import estilos from "./CardTrabalho.module.css"

function CardTrabalho(props){
    return(
        <div className={estilos.card}>
            <img className={estilos.img} src={props.img}/>
            <p className={estilos.texto}>{props.descricao}</p>
        </div>
    )
}

export default CardTrabalho