import "./style.css"

const gerrarCardResultado = ({ Dados, consumirApi })=>{

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
