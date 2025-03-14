import React, { useState } from 'react'

function Cronometro() {
    const [inicio, setinicio] = useState()
    const [pausa, setpausa] = useState()
    const [reset, setreset] = useState()

  return (
    <div className="container-Cronometro">
    <h2>Exiba o tempo decorrido</h2>
    </div>
    )
}
export default Cronometro