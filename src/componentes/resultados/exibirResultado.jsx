import "./style.css"

const gerrarCardResultado = ({ Dados, consumirApi })=>{

    return (
        <section className="results">
            <h4 className="textCenter">VOCÊ RECEBERÁ</h4>
            <span className="textAjusting">Amanhã: R${Dados["1"]}</span>
            <br></br>
            <span className="textAjusting">Em 15 dias : R${Dados["15"]}</span>
            <br></br>
            <span className="textAjusting">Em 30 dias : R${Dados["30"]}</span>
            <br></br>
            <span className="textAjusting">Em 90 dias : R${Dados["90"]}</span>
            <br></br>
            <div className="textCenter">
                <button onClick={ () => consumirApi()}>conferir</button>
            </div>
      </section>
    )

}

export default gerrarCardResultado;
