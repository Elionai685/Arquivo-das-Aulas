import React, { useState } from "react";

function Temperatura() {
    const [celsius, setCelsius] = useState(0);
    const [Farenheit,setFarenheit] = useState(0);
    const [kelvin, setKelvin] = useState(0);


function ConverterTemperatura() {
    let entrada = Number(prompt("Converter a temperatura"));
    setCelsius(entrada)
    setFarenheit(entrada + 32)
    setKelvin(entrada + 273,15)
}

return(
    <div>
        <h2>Temperatura</h2>

        <button onClick={ConverterTemperatura}>Converter</button>
        <p>
            Celsius: {celsius}
        </p>
        <p>
            Farenheit: {Farenheit}
        </p>
        <p>
            Kelvin: {kelvin}
        </p>

    </div>
  )
}
  export default Temperatura