import {AiOutlineSearch} from "react-icons/ai"
import "./index.css"
import Context from "../../Context/Context"
import { useContext, useState } from "react"
import axios from "axios"
import APIKEY from "../../../../apiKey"

export default function Header(){
    const [dataContext,setDataContext] = useContext(Context)
    const [city,setCity] = useState("")

    const buscarClima = async()=>{

        if(city === ""){
            alert("Digite o Nome Da Cidade!")
        }
        try {
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=pt_br&units=metric`)
            setDataContext(data.data)
            console.log(data.data)
            setCity("")
        } catch (error) {
            console.log(error)
        }
       
    }

    return(
        <div className="divPesquisa">
            <input onChange={e=>setCity(e.target.value)} value={city} id="pesquisar" type="text" placeholder="Nome da Cidade ..." />
            <button onClick={buscarClima} id="btnPesquisar"><AiOutlineSearch size={20}></AiOutlineSearch></button>
        </div>
            
    )
}