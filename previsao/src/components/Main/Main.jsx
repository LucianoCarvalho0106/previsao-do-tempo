import "./index.css"
import Context from "../../Context/Context"
import { useContext } from "react"
import Loading from "../Loading/Loading"

export default function Main(){
    const [data,setData] = useContext(Context)
    const[loading,setLoading]= useContext(Context)
    let date = new Date()
    let day = String(date.getDate()).padStart(2,0)
    let month = String(date.getMonth()+1).padStart(2,0)
    let year =String(date.getFullYear())

    

    console.log(data)
    
    return(
        <>{Object.keys(data).length > 0 ? (
            <div>
            <div className="cidadeData">
                    <span>{day}/{month}/{year}</span>
                    <p>{data.name}</p>
                    <img src={`https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`}></img>
                </div>

                <div className="data">
                    
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icone clima" />
                    <h2>{data.main.temp.toFixed(1)}°</h2>
                    <p>{data.weather[0].description}</p>
                </div>
                <hr />
                <p className="maisInformacoes">Mais Informações</p>
        </div>
        ):<div id="div-img"><img id="clima" src="src/assets/clima.png"></img></div>}
        </>   
    )
}