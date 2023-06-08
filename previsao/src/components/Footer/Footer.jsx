import {BsWind} from "react-icons/bs"
import "./index.css"
import Context from "../../Context/Context"
import { useState,useContext } from "react"


export default function Footer(){
    const [data,setData] = useContext(Context)
    console.log(data)
    return(
        <>
            {Object.keys(data).length > 0 && (
                <footer>
                <div>
                    <div className="min">
                        <p><span>Min: </span>{data.main.temp_min.toFixed(1)}°</p>
                    </div>
                    
                    <div className="max">
                        <p><span>Max: </span>{data.main.temp_max.toFixed(1)}°</p>
                    </div>
    
                    <div className="vel">
                        <BsWind></BsWind> <p>{data.wind.speed.toFixed(1)} km/h</p>
                    </div>
                </div>
            </footer>
            )}
        </>
        
    )
}