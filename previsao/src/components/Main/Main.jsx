import "./index.css"
export default function Main(){
    return(
        <>
            <div className="cidadeData">
                <span>05/06/2023</span>
                <p>Jaguaquara/BA</p>
                <img src="src/assets/Flag.png" alt="País" />
            </div>

            <div className="data">
                <img src="src/assets/cloud.png" alt="iconde clima" />
                <h2>25°</h2>
                <p>Nublado</p>
            </div>
            <hr />
            <p className="maisInformacoes">Mais Informações</p>
        </>
            
    )
}