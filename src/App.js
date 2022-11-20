import { useState } from "react";
// import { useEffect, useState } from "react";

// import api from "./componentes/api";

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

  return (
    <div className="App">
      <header className="App-header">

          <InputInserrir setQuantidadeDeParcelas = {setQuantidadeDeParcelas} setvalorDaVenda = {setvalorDaVenda} setPorcentualDeMDR = {setPorcentualDeMDR}></InputInserrir>
          <Resultados Dados = {Dados} setDados = {setDados} quantidadeDeParcelas = {quantidadeDeParcelas} porcentualDeMDR = {porcentualDeMDR} valorDaVenda = {valorDaVenda}  ></Resultados>
            
      </header>
    </div>
  );
}

export default App;