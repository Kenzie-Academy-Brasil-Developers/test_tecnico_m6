import "./style.css"

const inserrirDadosCard = ({ setvalorDaVenda, setQuantidadeDeParcelas, setPorcentualDeMDR})=>{

    return (
        <form>
            <h3>Simule sua Antecipaçâo</h3>

            <div className="ajustarImput">
                <div className="ajustarInputInterno">
                    <p>Informe o valor da venda</p>
                    <input id="valorDaVenda"onChange={(event) => setvalorDaVenda(event.target.value)}></input>
                </div>
            </div>


            <div className="ajustarImput">
                <div className="ajustarInputInterno">
                    <p>Em quantas parcelas</p>
                    <input id="quantidadeDeParcelas"onChange={(event) => setQuantidadeDeParcelas(event.target.value)}></input>
                </div>
            </div>
            
            <div className="ajustarImput">
                <div className="ajustarInputInterno">
                    <p>informe o percentual de MDR</p>
                    <input id="porcentualDeMDR"onChange={(event) => setPorcentualDeMDR(event.target.value)}></input>
                </div>
            </div>
        </form>
    )

}

export default inserrirDadosCard;