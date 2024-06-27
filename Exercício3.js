function calcularVolumeDetergente() {
    var raio = 2.5; // cm
    var altura = 22; // cm
    var volumePorFrasco = Math.PI * Math.pow(raio, 2) * altura; // cm³
    var frascosPorHora = 55;
    var horasPorDia = 16;
    var diasPorMes = 30;
    var volumeMensal = volumePorFrasco * frascosPorHora * horasPorDia * diasPorMes;
    document.getElementById("resultadoDetergente").innerHTML = "Volume Mensal de Produção: " + volumeMensal.toFixed(2) + " cm³";
}