import estilos from "./Form.module.css"

function Form(){
    return(
        <div className={"row "+ estilos.fundo} id="contato">
            <div className="col-md-12">
                <h2 className={estilos.h2}>QUER UM PROJETO DE ACORDO COM SUAS IDEIAS?</h2>
                <p className={estilos.p}>Preencha os campos com os dados necessários </p>
                <hr className={estilos.linha}/>
            </div>

            <div className="col-md-12">
                <form action="" className={estilos.form}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Informe seu nome</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Ex. José Antônio " />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Telefone para contato</label>
                        <input type="phone" className="form-control" id="exampleFormControlInput1"
                               placeholder="Ex. (18) 99696 - 7878 " />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="Ex. name.surname@gmail.com"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Informe o seu objetivo</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Ex. Logo; Embalagem, Design de Aplicativos e Web " />
                    </div>

                    <button className={estilos.botao}>Enviar</button>

                </form>
            </div>

        </div>
    )
}

export default Form