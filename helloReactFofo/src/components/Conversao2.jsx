import { useState } from "react"
import './Conversao2.css'

function Conversao2() {
    const [km, setkm] = useState(0)
    const [milha, setMilha] = useState(0)
    const {legua, setLegua} = useState(0)
    function converterKmParaMilha(){
        let entrada = Number(prompt("km: "))
        setMilha(entrada * 0.621371)
        setLegua(entrada * 0,207124)
        setkm(entrada)
    }

   return (
      <div className="container-conversao2">
        <h2>km ➡️ Milhas ➡️ léguas</h2>
        <button onClick={converterKmParaMilha}>Converter</button>
        <p>
            Km: {km}
        </p>
        <p>
            Milhas: {milha}