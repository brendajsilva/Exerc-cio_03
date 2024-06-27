function converterTemperatura() {
    var fahrenheit = document.getElementById("tempFahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("resultadoTemperatura").innerHTML = "Temperatura em Celsius: " + celsius.toFixed(2) + " °C";
}