import { useState } from "react";
// import { useEffect, useState } from "react";

import api from "./componentes/api";

import "./componentes/style.css"

import Resultados from "./componentes/resultados/exibirResultado"
import InputInserrir from "./componentes/prencher/formIncerrirDados"

function App() {

  const dadosIniciais = {
    "1": 0,
    "15": 0,
    "30": 0,
    "90": 0
  } 

  const [Dados, setDados] = useState(dadosIniciais);

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

    api.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app",dadosParaNovaRequisisao
    )
      .then((response) => setDados(response.data))
      .catch((err) => {
        alert("valores digitados invalidos");
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <div className="App">
      <header className="App-header">

          <InputInserrir setQuantidadeDeParcelas = {setQuantidadeDeParcelas} setvalorDaVenda = {setvalorDaVenda} setPorcentualDeMDR = {setPorcentualDeMDR}></InputInserrir>
          <Resultados Dados = {Dados} consumirApi = {consumirApi}></Resultados>
            
      </header>
    </div>
  );
}

export default App;