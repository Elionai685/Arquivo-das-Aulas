import { useState } from 'react'

function IMC() {    
    const [peso, setpeso] = useState()
    const [altura, setaltura] = useState()
    function calcularimc() {
        let peso = Number(prompt("Digite o peso: "))
        let altura = Number(prompt("Digite a altura"))
    } 
  return (
    <div className='container-imc'>
<h2>imc</h2>

<button onClick={calcularimc}>Calcular o IMC</button>
<h2>Digite a classificação </h2>
    </div>
  )
}

export default IMC




