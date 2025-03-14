import { useState } from 'react'
import './Anobissexto.css'

function Anobissexto() {
    const [resultado, setResultado] = useState("Resultado não calculado")

    function lerAno(){
        let ano = Number(prompt("Digite o ano: "))
        if(ano % 4 == 0){
            setResultado("É um ano bissexto")
        }else{
            setResultado("Não é bissexto")
        }
    }

    return (
    <div className='container-anoBissexto'>
        <h2>AnoBissexto</h2>
    
       <button onClick={lerAno}>Informar Ano</button>
       <p>
       {resultado}
    </p>
  </div>
  )
}

export default Anobissexto 