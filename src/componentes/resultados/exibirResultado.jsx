import "./style.css"
import api from "../api";

const gerrarCardResultado = ({ Dados,setDados,valorDaVenda,quantidadeDeParcelas,porcentualDeMDR})=>{

    function consumirApi(){

        const dadosParaNovaRequisisao = {
          "amount": valorDaVenda,
          "installments": quantidadeDeParcelas,
          "mdr": porcentualDeMDR
        }
    
        if(valorDaVenda === undefined){
          alert("digite um valor de venda");
          return "finalizada no digite um valor de venda"
        }
    
        if(quantidadeDeParcelas === undefined){
          alert("digite uma quantida de parcelas");
          return "finalizada no digite uma quantida de parcelas"
        }
    
        if(porcentualDeMDR === undefined){
          alert("digite um porcentual de MDR");
          return "finalizada no digite um porcentual de MDR"
        }
    
        api.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app",dadosParaNovaRequisisao
        )
          .then((response) => setDados(response.data))
          .catch((err) => {
            alert("valores digitados invalidos");
            console.error("ops! ocorreu um erro" + err);
          });
      }

    return (
        <section className="results">
            <h4 className="textCenter">VOCÊ RECEBERÁ</h4>
            <span className="textAjusting">Amanhã : <p>R${Dados["1"]}</p></span>
            <br></br>
            <span className="textAjusting">Em 15 dias : <p>R${Dados["15"]}</p></span>
            <br></br>
            <span className="textAjusting">Em 30 dias : <p>R${Dados["30"]}</p></span>
            <br></br>
            <span className="textAjusting">Em 90 dias : <p>R${Dados["90"]}</p></span>
            <br></br>
            <div className="textCenter">
                <button onClick={ () => consumirApi()}>conferir</button>
            </div>
      </section>
    )

}

export default gerrarCardResultado;
