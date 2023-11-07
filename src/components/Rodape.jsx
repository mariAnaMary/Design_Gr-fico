import estilos from "./Rodape.module.css"

function Rodape(){
    return(
        <div className={"row "+ estilos.fundo} id="contato">
            <div className={"col " + estilos.item}>
                <a href="https://www.whatsapp.com/" target="_blank">
                    <img className={estilos.what} src="/img/what.png"/>
                </a>
                <a href="http://instagram.com" target="_blank">
                    <img className={estilos.insta} src="/img/insta.png"/>
                </a>
            </div>
        </div>
    )
}

export default Rodape