import {AiOutlineSearch} from "react-icons/ai"
import "./index.css"

export default function Header(){
    return(
        <div className="divPesquisa">
            <input id="pesquisar" type="text" placeholder="Nome da Cidade ..." />
            <button id="btnPesquisar"><AiOutlineSearch size={20}></AiOutlineSearch></button>
        </div>
            
    )
}