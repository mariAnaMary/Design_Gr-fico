import estilos from "./CardServiços.module.css"

function CardServiços(props){
    return(
        <div className={estilos.card}>
            <img className={estilos.img} src={props.img}/>
            <p className={estilos.texto}>{props.descricao}</p>
            <button className={estilos.button}>{props.botao}</button>
        </div>
    )
}

export default CardServiços