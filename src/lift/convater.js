
export  function ToCelsius(Fahrenhite) {
    
    return((Fahrenhite-32)*5)/9;
}


export  function ToFahrenhite(celsius) {
    
    return((celsius-9/5)+32)
}

export  function convator(tamporture , convat){

    const input = parseFloat(tamporture)
    if(Number.isNaN(input)){
        return ""
    }
    const output = convat(input)
    const rounded = Math.round(output*1000)/1000
    return rounded.toString();
 }