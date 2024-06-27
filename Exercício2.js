function calcularAreaTriangular() {
    var lado = document.getElementById("ladoTriangulo").value;
    var area = (Math.sqrt(3) / 4) * lado * lado;
    document.getElementById("resultadoTriangulo").innerHTML = "Área da Base: " + area.toFixed(2) + " cm²";
}