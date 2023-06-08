import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./app.css"
import axios from "axios"
import Context from "./Context/Context.jsx"
import { useState } from "react"


function App() {
  

  const [datas,setDatas] = useState({})
  const [loading,setLoading] = useState(false)

  return (
    <Context.Provider value={[datas,setDatas,loading,setLoading]}>
      <div id="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Context.Provider>
  )
}

export default App
