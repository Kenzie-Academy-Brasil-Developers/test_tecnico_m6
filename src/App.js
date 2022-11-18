import { useState } from "react";
// import { useEffect, useState } from "react";
import api from "./api";


// console.log((Math.floor(Math.random() * 100) + 1))

function App() {

  const dadosIniciais = {
    "1": 0,
    "15": 0,
    "30": 0,
    "90": 0
} 

  const [Dados, setDados] = useState(dadosIniciais);
  // const [alterarDados, setAlterarDados] = useState(dadosIniciais)
  const [valorDaVenda, setvalorDaVenda] = useState(undefined);
  const [quantidadeDeParcelas, setQuantidadeDeParcelas] = useState(undefined);
  const [porcentualDeMDR, setPorcentualDeMDR] = useState(undefined);

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
    // const exenplo = {
    //   "amount": 1000,
    //   "installments": 3,
    //   "mdr": 4
    // }
    api.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app",dadosParaNovaRequisisao
    )
      .then((response) => setDados(response.data))
      .catch((err) => {
        alert("valores digitados invalidos");
        console.error("ops! ocorreu um erro" + err);
      });
  }

  // function increment (){

  //   setDados(alterarDados)
  // }



  return (
    <div className="App">
      <header className="App-header">

      <form>
      <input id="valorDaVenda"onChange={(event) => setvalorDaVenda(event.target.value)}></input>
      <br></br>
      <input id="quantidadeDeParcelas"onChange={(event) => setQuantidadeDeParcelas(event.target.value)}></input>
      <br></br>
      <input id="porcentualDeMDR"onChange={(event) => setPorcentualDeMDR(event.target.value)}></input>
      {/* <button id="btnEnviar" type="submit"></button> */}
      </form>

      {/* <button onClick={(event) => console.log(valorDaVenda)}>gggg</button>
      <button onClick={(event) => console.log(quantidadeDeParcelas)}>gggg</button>
      <button onClick={(event) => console.log(porcentualDeMDR)}>gggg</button> */}
        <span>{Dados["1"]}-</span>
        <span>{Dados["15"]}-</span>
        <span>{Dados["30"]}-</span>
        <span>{Dados["90"]}</span>
        <br></br>
        <button onClick={ () => consumirApi()}>gerar</button>
      </header>
    </div>
  );
}

export default App;