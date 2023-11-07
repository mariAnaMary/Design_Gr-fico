import estilos from "./Nav.module.css"

function Nav() {
    return (
        <header className={estilos.header}>
            <nav className={"navbar navbar-expand-lg " + estilos.nav} style={{padding: "0px"}}>
                <div className="container">

                    <a className="navbar-brand" href="">
                        <img src="/img/Logo.png" alt="Logo" className={"d-inline-block align-text-top " + estilos.img}/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <a className={"nav-link " + estilos.itens} href="#banner">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className={"nav-link " + estilos.itens} href="#trabalho">Nosso Trabalho</a>
                            </li>

                            <li className="nav-item">
                                <a className={"nav-link " + estilos.itens} href="#serviços">Serviços</a>
                            </li>

                            <li className="nav-item">
                                <a className={"nav-link " + estilos.itens} href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}
export default Nav;