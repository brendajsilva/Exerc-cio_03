function calcularAreaQuadrada() {
    var lado = document.getElementById("ladoQuadrado").value;
    var area = lado * lado;
    document.getElementById("resultadoQuadrado").innerHTML = "Área da Base: " + area + " cm²";
}
