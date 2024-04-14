document.querySelector("#btnCalcular").addEventListener("click", calcularChirridos);

function calcularChirridos(){
    let nChirridos = Number(document.querySelector("#txtChirridos").value);
    /* formula ley de Dolbear */ 
    let resultadoFahrenheit = 50 + (nChirridos - 40 / 4);
    console.log(resultadoFahrenheit)
    /* formula para pasar de f a c */
    let resultadoFaC = (resultadoFahrenheit - 32) / 1.8;
    console.log(resultadoFaC);
    /* formula Celcius */
    let resultadoCelcius = 10 + (nChirridos - 40 / 7);
    console.log(resultadoCelcius)
}

