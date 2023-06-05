import {BsWind} from "react-icons/bs"
import "./index.css"

export default function Footer(){
    return(
        <footer>
            <div>
                <div className="min">
                    <p><span>Min:</span>18°</p>
                </div>
                
                <div className="max">
                    <p><span>Max:</span>27°</p>
                </div>

                <div className="vel">
                    <BsWind></BsWind> <p>3km/h</p>
                </div>
            </div>
        </footer>
    )
}